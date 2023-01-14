
import { GetStaticPaths, GetStaticProps } from 'next';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import { ProductContainer, ImageContainer, ProductDetails } from '../../styles/pages/product';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HomeProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string
    }
}

const Product = ({product}: HomeProps) => {

    const {isFallback } = useRouter();

    if(isFallback){
       return(
         <p>Loading...</p>  
       );
    }

    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
            </ImageContainer>
            <ProductDetails>
                <h1>
                    {product.name}
                </h1>
                <p>
                    {product.description}
                </p>
            </ProductDetails>
        </ProductContainer>
    );   
};

export default Product;

export const getStaticPaths:GetStaticPaths = async() => {
    return{
        paths: [],
        fallback: true
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
                description: product.description
            }
        }
    };
};