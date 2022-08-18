import {
  Box,
  Button,
  chakra,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { IoIosPeople, IoIosRibbon, IoMdPeople } from 'react-icons/io';
function StatsCard(props) {
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
      </Flex>
    </Stat>
  );
}
export default function BasicStatistics() {
  return (
    <Box mt={"10rem"} mb={"10rem"} maxW="150em" mx={'auto'} pb={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'left'} fontSize={{base: "2xl" , sm: "3xl", md:"4xl"}} py={10} fontWeight={'bold'} mb={'5rem'}>
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Headcount'}
          stat={'13'}
          icon={<IoIosPeople size={'5em'} popoverContent={'There are 5 engineers and 8 technical personnel in our company.'} />}
        />
        <StatsCard title={'Eng. Branch'} stat={'5'} icon={<IoIosRibbon size={'5em'} />} />
        <StatsCard title={'Location'} stat={'2'} icon={<GoLocation size={'5em'} />} />
        <StatsCard title={'Partnership'} stat={'5'} icon={<IoMdPeople size={'5em'} />} />
      </SimpleGrid>
    </Box>
  );
}
