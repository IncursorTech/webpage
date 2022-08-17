// Chakra imports
import { Box, Button, Container, Divider, Heading, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import CustomContainer from './CustomContainer';
import { FaCheckCircle } from 'react-icons/fa';

const PackageTier = ({ destination, service, duration, travelers, transportation, accommodation, insurance, direction }) => {
  return (
    <Stack
      p={3}
      py={12}
      justifyContent={{
        base: 'space-around',
        md: 'space-around',
      }}
      // minHeight={'70rem'}
      direction={
        direction === 'horizontal'
          ? {
              base: 'column',
              md: 'row',
            }
          : {
              base: 'column',
              md: 'column',
            }
      }
      spacing={direction === 'horizontal' ? 4 : 8}
      alignItems={'center'}
      bg={'gray.100'}
    >
      <Stack
        align={
          direction === 'horizontal'
            ? {
                base: 'flex-start',
                md: 'flex-start',
                sm: 'center',
              }
            : 'center'
        }
        direction={'column'}
        spacing={direction === 'horizontal' ? 4 : 8}
      >
        <Heading size={'md'}>{destination}</Heading>
        <Heading size={'md'}>{service}</Heading>
      </Stack>
      <Stack
        align={
          direction === 'horizontal'
            ? {
                base: 'flex-start',
              }
            : {
                base: 'center',
              }
        }
        direction={'column'}
        spacing={direction === 'horizontal' ? 4 : 8}
      >
        <Heading size={'md'}>{duration}</Heading>
        <Heading size={'md'}>{travelers}</Heading>
      </Stack>
      <List py={8} spacing={3} textAlign="start">
        <ListItem>
          <Text fontSize={'md'}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {transportation}
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={'md'}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {accommodation}
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={'md'}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {insurance}
          </Text>
        </ListItem>
      </List>
      <Stack pt={8}>
        <NextLink href="/plan-treatment">
          <Button size="md" color={'gray.500'} bgColor={'gray.200'}>
            Replan my treatment
          </Button>
        </NextLink>
      </Stack>
    </Stack>
  );
};

const PlanInformation = ({
  description,
  destination,
  service,
  duration,
  travelers,
  transportation,
  accommodation,
  insurance,
  direction,
}) => {
  return (
    <CustomContainer>
      <Box py={6} px={5} min={'100vh'} shadow={'xl'} backgroundColor={'white'} rounded={'lg'}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'space-around',
              md: 'space-around',
            }}
            direction={'column'}
          >
            <Stack
              width={{
                base: '100%',
                md: '100%',
              }}
              textAlign={'center'}
              pb={8}
            >
              <Heading size={'lg'}>
                The Right Plan for <Text color="green.400">Your Health</Text>
              </Heading>
            </Stack>
            <Stack width={'100%'} pb={4}>
              <Text fontSize={'lg'} textAlign={'center'}>
                {description}
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier
            destination={destination}
            service={service}
            duration={duration}
            travelers={travelers}
            transportation={transportation}
            accommodation={accommodation}
            insurance={insurance}
            direction={direction}
          />
        </Stack>
      </Box>
    </CustomContainer>
  );
};

export default PlanInformation;
