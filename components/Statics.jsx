import { Box, chakra, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { GoLocation } from 'react-icons/go';
import { IoIosPeople, IoIosRibbon, IoMdPeople } from 'react-icons/io';

function StatsCard(props) {
  const { title, stat, icon } = props;
  console.log(props);
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={5}
      border={'1px solid'}
      borderColor={'#E1E1E1'}
      bg={'white'}
      rounded={'lg'}
      transition={'ease-in-out .3s'}
      _hover={{
        transform: 'scale(1.01)',
        shadow: 'lg',
      }}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }} textAlign={'Left'} width={'100%'} height={'100%'}>
          <StatLabel fontSize={'md'} fontWeight={'bold'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
export default function BasicStatistics() {
  const { t } = useTranslation('statics');
  return (
    <Box mt={'10rem'} mb={'10rem'} maxW="150em" mx={'auto'} pb={5}>
      <chakra.h1 textAlign={'left'} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} py={10} fontWeight={'bold'} mb={'5rem'}>
        {t('statics:header')}
      </chakra.h1>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={t('statics:team')} stat={'13'} icon={<IoIosPeople size={'5em'} color={'black'} />} />
        <StatsCard title={t('statics:branch')} stat={'5'} icon={<IoIosRibbon size={'5em'} color={'black'} />} />
        <StatsCard title={t('statics:locations')} stat={'2'} icon={<GoLocation size={'5em'} color={'black'} />} />
        <StatsCard title={t('statics:partners')} stat={'5'} icon={<IoMdPeople size={'5em'} color={'black'} />} />
      </SimpleGrid>
    </Box>
  );
}
