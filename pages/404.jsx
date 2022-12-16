import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFoundPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);

  return (
    <Box>
      <Flex p={5} minH={'100vh'} align={'center'} justify={'center'} bgGradient="linear(to-l, #0077ffaa, #ff002baa)">
        <Skeleton
          startColor="white"
          endColor="gray.300"
          minW={{ base: '95vw', md: '40vw' }}
          minH={{ base: '40vw', md: '40vw' }}
          rounded={'3xl'}
        >
          <Stack></Stack>
        </Skeleton>
      </Flex>
    </Box>
  );
}
