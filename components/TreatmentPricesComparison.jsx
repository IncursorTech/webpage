import { Box, Button, Heading, HStack, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
function PriceWrapper({ children }) {
    return (<Box mb={4} shadow="base" borderWidth="1px" alignSelf={{ base: 'center', lg: 'flex-start' }} borderColor="grayscale.200" borderRadius={'xl'}>
      {children}
    </Box>);
}
function TreatmentPricesComparison({ cities, selectedCity, onSelect }) {
    return (<Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          For your health, comfort and happiness
        </Text>
      </VStack>
      <Stack direction={{ base: 'column', md: 'row' }} textAlign="center" justify="center" spacing={{ base: 4, lg: 10 }} py={10}>
        {cities.map((city, index) => (<PriceWrapper key={index}>
            <Box position="relative">
              {city.isMostPopular && (<Box position="absolute" width={'70%'} top="-20px" left="50%" style={{ transform: 'translate(-50%)' }}>
                  <Text textTransform="uppercase" bg="red.300" px={5} py={1} color="gray.900" fontSize="sm" fontWeight="600" rounded="xl">
                    Most Popular
                  </Text>
                </Box>)}
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  {city.name}
                </Text>
                <HStack justifyContent="center">
                  {/* <Text fontSize="xl" fontWeight="600">
              {city.currency}
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              {city.services?.treatment?.price}
            </Text> */}
                  {/* <Text fontSize="xl" color="gray.500">
                    /month
                  </Text> */}
                </HStack>
              </Box>
              <VStack bg="gray.50" py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  {city.features.map((feature, index) => (<ListItem key={index}>
                      <ListIcon as={feature.icon} color="green.500"/>
                      {feature.name}
                    </ListItem>))}
                </List>
                <Box w="80%" pt={7}>
                  <Button value={city.code} w="full" colorScheme="cyan" variant={selectedCity?.code === city.code ? 'solid' : 'outline'} onClick={() => onSelect(city)}>
                    Select
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>))}
      </Stack>
    </Box>);
}
export default TreatmentPricesComparison;
