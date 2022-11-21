import { Box, Flex, Text } from '@chakra-ui/react';

export default function Page({ title, imgURL }) {
  return (
    <Flex align={'center'} justify={'center'} minH={'30rem'}>
      <Box rounded={'lg'} m={'auto'} p={'1rem'}>
        <Text fontSize={'6rem'}>{title}</Text>
      </Box>
    </Flex>
  );
}
