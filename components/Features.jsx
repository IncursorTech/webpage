import { Box, Button, chakra, Flex, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCalculatorFill, BsFillCalendar3Fill, BsFillGearFill, BsFillQuestionSquareFill, BsTerminalFill, BsTools } from 'react-icons/bs';
const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      p={'2rem'}
      border="1px"
      borderColor={'gray.200'}
      rounded={'lg'}
      bg={'white'}
      transition={'ease-in-out .3s'}
      _hover={{
        transform: 'scale(1.01)',
        shadow: 'lg',
      }}
    >
      <Flex w={8} h={8} fontSize={'10rem'} align={'center'} justify={'center'} color={'black'} mb={1}>
        {icon}
      </Flex>
      <Text fontSize={'2xl'} fontWeight={600} textTransform={'capitalize'}>
        {title}
      </Text>
      <Text fontSize={'md'} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  );
};
export default function SimpleThreeColumns() {
  const { t } = useTranslation('features');
  return (
    <Box maxW="150em" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }} py={{ base: 2, sm: 12, md: 100 }}>
      <chakra.h1 display={{ sm: 'grid', md: 'none' }} textAlign={'left'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        {t('features:header')}
      </chakra.h1>
      <Flex>
        <Flex display={{ base: 'none', md: 'grid' }} flex={1} justify={'center'} align={'center'}>
          <chakra.h1
            transformOrigin={'50% 50%'}
            transform={'rotate(-90deg)'}
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}
            width={'100%'}
          >
            {t('features:header')}
          </chakra.h1>
        </Flex>
        <SimpleGrid flex={10} columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
          <Feature
            icon={<Icon as={BsFillGearFill} w={10} h={10} />}
            title={t('features:system.title')}
            text={t('features:system.description')}
          />
          <Feature
            icon={<Icon as={BsTerminalFill} w={10} h={10} />}
            title={t('features:software.title')}
            text={t('features:software.description')}
          />
          <Feature
            icon={<Icon as={BsTools} w={10} h={10} />}
            title={t('features:hardware.title')}
            text={t('features:hardware.description')}
          />
          <Feature
            icon={<Icon as={BsCalculatorFill} w={10} h={10} />}
            title={t('features:algorithms.title')}
            text={t('features:algorithms.description')}
          />
          <Feature
            icon={<Icon as={BsFillQuestionSquareFill} w={10} h={10} />}
            title={t('features:consultancy.title')}
            text={t('features:consultancy.description')}
          />
          <Feature
            icon={<Icon as={BsFillCalendar3Fill} w={10} h={10} />}
            title={t('features:supply.title')}
            text={t('features:supply.description')}
          />
        </SimpleGrid>
      </Flex>
      <Flex align={'center'} justify={'center'} p={10}>
        <NextLink
          href={'/solution'}
          passHref
          style={{
            color: 'black',
            bg: 'white',
            fill: 'none',
          }}
          _hover={{
            bg: 'none',
          }}
        >
          <Button
            size={'lg'}
            h={'5rem'}
            bg={'white'}
            rightIcon={<AiOutlineArrowRight color="black" />}
            _hover={{
              bg: 'none',
              border: '2px',
            }}
          >
            {t('features:button')}
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}
