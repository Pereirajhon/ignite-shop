import { GetStaticProps } from 'next';
import  Link  from 'next/link';
import { stripe } from '../lib/stripe';

import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home'; 

import {useKeenSlider} from 'keen-slider/react';
import Stripe from 'stripe';


interface HomeProps {
	products: {
		id: string,
		name: string,
		imageUrl: string,
		price: string,
	}[]
}

export default function Home({products}: HomeProps) {

	const [sliderRef] = useKeenSlider({
		slides:{
			perView: 4,
			spacing: 48,
		}
	});

	console.log(products);

	return (
		<>
			<HomeContainer ref={sliderRef} className='keen-slider' >
				{products.map(product => (
					<Link href={`/product/${product.id}`} key={product.id} >
						<Product className='keen-slider__slide' >
						<Image src={product.imageUrl} width={520} height={480} alt='' />
						<footer>
							<span>{product.name}</span>
							<strong>{product.price}</strong>
						</footer>
					</Product>
					</Link>		
				))
				}
	
			</HomeContainer>
		</>					
	);
}

export const getStaticProps:GetStaticProps = async() => {
	
	const response = await stripe.products.list({
		expand: ['data.default_price']
	});

	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price;
		const priceUnitAmount = price.unit_amount as number ;

		return{
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: new Intl.NumberFormat('pt-BR',{
				style: 'currency',
				currency: 'BRL'
			}).format(priceUnitAmount / 100)
		};
	});

	return {
		props: {
			products
		},
		revalidate: 60 * 60 * 1  //1 hora

	};
};