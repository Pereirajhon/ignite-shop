import { styled } from '@stitches/react';

export const ProductContainer = styled('main',{
    maxWidth: 1180,
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '3rem',

});

export const ImageContainer = styled('div',{
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d5 100% )',
    borderRadius: 8,
    maxWidth: 546,
    width: '100%',
    height: 566,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    img: {
        objectFit: 'cover',
    }

});

export const ProductDetails = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',

    h1: {
        marginTop: '1.5rem',
    },

    strong: {
        color: '$green500',
        fontSize: '$2xl',
        fontWeight: '400',
    },

    p: {
        color: '$gray300',
        lineHeight: 1.65,
    }
    
});

export const Button = styled('button', {
    marginTop: 'auto',
    padding: '1.4rem',
    backgroundColor: '$green300',
    color: '$gray400',
    borderRadius: 8,
    border: 'none',
    fontSize: '$lg',
    fontWeight: 'bold',

    '&:hover': {
        filter: 'brightness(0.9)',
    },

    '&:disabled' : {
        opacity: 0.5,
        cursor: 'not-allowed'
    }

});