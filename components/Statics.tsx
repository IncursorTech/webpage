import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';

import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { IoMdPeople, IoIosDocument, IoIosPeople, IoIosRibbon } from 'react-icons/io';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  popoverContent: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, popoverContent } = props;
  console.log(props);
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Popover placement="top">
          <PopoverTrigger>
            <Button
              bg={'none'}
              width={'100%'}
              height={'100%'}
              _hover={{
                bg: 'none',
              }}
            >
              <Box pl={{ base: 2, md: 4 }} textAlign={'Left'} width={'100%'} height={'100%'}>
                <StatLabel fontSize={'md'} fontWeight={'medium'} isTruncated>
                  {title}
                </StatLabel>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                  {stat}
                </StatNumber>
              </Box>
              <Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
                {icon}
              </Box>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontSize={'lg'} fontWeight={'500'}>
              {title}
            </PopoverHeader>
            <PopoverBody fontSize={'md'}>{popoverContent}</PopoverBody>
          </PopoverContent>
        </Popover>

        {/* <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={'md'} fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
          {icon}
        </Box> */}
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="150em" mx={'auto'} pb={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} fontWeight={'bold'} mb={'5rem'}>
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Headcount'}
          stat={'13'}
          icon={<IoIosPeople size={'5em'} popoverContent={'There are 5 engineers and 8 technical personnel in our company.'} />}
        />
        <StatsCard title={'Engineering Branch'} stat={'5'} icon={<IoIosRibbon size={'5em'} />} />
        <StatsCard title={'Location'} stat={'2'} icon={<GoLocation size={'5em'} />} />
        <StatsCard title={'Partnership'} stat={'5'} icon={<IoMdPeople size={'5em'} />} />
        <StatsCard title={'Project'} stat={'7'} icon={<IoIosDocument size={'5em'} />} />
      </SimpleGrid>
    </Box>
  );
}
