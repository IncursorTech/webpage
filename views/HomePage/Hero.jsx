import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';
export default function Hero() {
  const { t } = useTranslation('hero');
  return (
    <Box position={'relative'} h={'100vh'} margin={'auto'} alignSelf={'center'} filter={'grayscale(60%)'} zIndex={1}>
      <Image
        zIndex={0}
        src={'/images/3d-render-low-poly-design-abstract-blur-background.jpg'}
        alt="hero"
        quality={100}
        layout="fill"
        sizes="100vh"
        style={{
          objectFit: 'cover',
        }}
      ></Image>
      <Flex align={'center'} justify={'center'} h={'100vh'} fontSize={'5rem'} fontWeight={'bold'} textShadow={'xl'} px={5}>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: '0px',
            y: '0px',
            scale: 2,
            ease: 'ease-in-out',
          }}
          animationType="light"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          {t('hero:header')}
        </AnimatedText>
      </Flex>
    </Box>
  );
}
