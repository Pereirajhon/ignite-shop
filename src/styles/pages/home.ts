import {styled} from '@stitches/react';

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - (100vw - 1180px) /2)',
    marginLeft: 'auto',
    minHeight: 600,
});

export const Product = styled('div',{
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d5 100% )',
    borderRadius: 8,
    position: 'relative',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    },

    footer:{
        backgroundColor: 'rgba(0,0,0,0.6)',
        opacity: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        margin: '0.25rem',
        padding: '1rem',
        borderRadius: 6,
        transform: 'transtaleY(110%)',
        transition: 'all 0.2s ease in out',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        strong: {
            color: '$green500',
            fontWeight: '600',
            fontSize: '$lg'
        },
        
        span: {
            fontWeight: 'bold',
            fontSize: '$md'
        },         
    },
    '&:hover': {
        footer: {
           opacity: 1,
           transform: 'translateY(0%)', 
        }    
    }
});
