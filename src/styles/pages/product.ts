import { styled } from '@stitches/react';

export const ProductContainer = styled('main',{
    maxWidth: 1180,
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',

});

export const ImageContainer = styled('div',{
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d5 100% )',
    borderRadius: 8,
    img: {
        display: 'block',
        margin: 'auto'
    }

});

export const ProductDetails = styled('div',{
    border: '1px solid green',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    h1: {
        marginTop: '1rem',
    },

    strong: {
        color: '$green500',
        fontSize: '$2xl',
        fontWeight: '600',
    },

    p: {
        color: '$gray300',
        fontSize: '1rem',
        lineHeight: 1.5,
    }
    
});

export const Button = styled('button', {
    marginTop: 'auto',
    padding: '1.4rem',
    backgroundColor: '$green300',
    color: '$gray100',
    borderRadius: 8,
    border: 'none',
    fontSize: '$lg',
    fontWeight: 'bold',

    '&:hover': {
        filter: 'brightness(0.9)',
    }
});