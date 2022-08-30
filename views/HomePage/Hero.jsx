import { Box } from '@chakra-ui/react';
import Image from 'next/future/image';
export default function Hero() {
  return (
    <Box position={'relative'} h={'100vh'} margin={'auto'} alignSelf={'center'}>
      <Image
        src={'/images/hero.png'}
        alt="incursor-hero"
        quality={100}
        fill
        priority
        unoptimized
        style={{ 'object-fit': 'cover', 'object-position': 'top' }}
      />
    </Box>
  );
}
