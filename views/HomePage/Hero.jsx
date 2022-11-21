import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
export default function Hero() {
  return (
    <Box position={'relative'} h={'100vh'} margin={'auto'} alignSelf={'center'}>
      <Image
        src={'/images/hero.png'}
        alt="hero"
        quality={100}
        layout="fill"
        sizes="100vh"
        style={{
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}
