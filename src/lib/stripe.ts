import Stripe from 'stripe';

export const stripe = new Stripe(
    process.env.SECRET_STRIPE_KEY as string,{
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop',
    
    }
});