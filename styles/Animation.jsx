import { keyframes } from 'styled-components';
export const heartBeat = keyframes `
    0%
    {
        transform: translateY(50px);
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%
    {
        transform: translateY(0px);
        opacity: 1;
    }
}

`;
