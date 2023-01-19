
import { GetStaticPaths, GetStaticProps } from 'next';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import { ProductContainer, ImageContainer, ProductDetails, Button } from '../../styles/pages/product';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useState} from 'react';
import axios from 'axios';


interface HomeProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
        defaultPriceId: string,
    }
}

const Product = ({product}: HomeProps) => {
    const [isCheckoutSession, setIsCheckoutSession] = useState(false);

    const {isFallback } = useRouter();

    if(isFallback){
       return(
         <p>Loading...</p>  
       );
    }

    async function handlePay(){
        try {
            setIsCheckoutSession(true);

            const response = await axios.post('/api/checkout',{
                priceId: product.defaultPriceId
            });

            const {checkoutSession} = response.data;
            window.location.href = checkoutSession;

        } catch(error){
            setIsCheckoutSession(false);
            console.error(error);
        }

    }

    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={440} height={480} alt='' />
            </ImageContainer>
            <ProductDetails>
                <h1> {product.name} </h1>
                <strong>{product.price}</strong>
                <p> {product.description} </p>
                <Button
                 type='button'
                 disabled={isCheckoutSession === true}
                 onClick={() => handlePay()} >
                    Comprar agora
                </Button>
            </ProductDetails>
        </ProductContainer>
    );   
};

export default Product;

export const getStaticPaths:GetStaticPaths = async() => {
    return{
        paths: [],
        fallback: true,
    };
};

export const getStaticProps:GetStaticProps = async({params} ) => {

    const productId = params?.id as string ;

    const product = await stripe.products.retrieve(productId,{
        expand:['default_price']
    });

    const price = product.default_price as Stripe.Price;
    const priceUnitAmount = price.unit_amount as number ;

    return{
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(priceUnitAmount / 100),
                description: product.description,
                defaultPriceId: price.id,
            }
        }
    };
};