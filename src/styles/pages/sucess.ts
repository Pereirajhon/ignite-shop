import {styled} from '@stitches/react';

export const SucessContainer = styled('main',{
    height: 556,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem',
  
    h1: {
        fontSize: '$2xl',
    },

    p: {
        width: 420,
        fontSize: '$lg',
        lineHeight: 1.2,
    },
    
});

export const ImageContainer = styled('div',{
    maxWidth: 140,
    width: '100%',
    height: 160,
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d5 100% )',
    borderRadius: 8,
    img: {
        objectFit: 'cover',
        display: 'block',
        margin: '0 auto',
    }, 
});
