import { SucessContainer, ImageContainer } from '../styles/pages/sucess';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import Link from 'next/link';

interface PropsSucess {
    customerName: string,
    product: {
        name: string,
        imageUrl: string,
    }
}

const sucessCheckout = ({product, customerName}: PropsSucess) => {

    return(
        <>
            <SucessContainer>
                <h1>Compra efetuada</h1>
                <ImageContainer>
                    <Image src={product.imageUrl} width={150} height={160}  alt='' />
                </ImageContainer>
                <p>Uhuul!! {customerName}, sua {product.name} já está a caminho do seu endereço. </p>
                <Link href='/'  >Voltar ao cartalogo</Link>
            </SucessContainer>
        </>
    );
};

export default sucessCheckout;


export const getServerSideProps:GetServerSideProps = async({query, params}) => {
    const sessionId = String(query.session_id);
    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details?.name as string;
    const product = session.line_items?.data[0].price?.product as Stripe.Product ;

    console.log(product);

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    };
};
