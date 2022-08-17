import { Button, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
function SignArea() {
    return (<Stack flex={{ base: 1, ml: 34 }} mx="6" justify={'flex'} direction={'row'} spacing={10}>
      {/* <NextLink href="/login" passHref>
          <Button as={'a'} fontSize={'xl'} fontWeight={400} variant={'link'} color={'white'}>
            Login
          </Button>
        </NextLink> */}

      <NextLink href="/login" passHref>
        <Button display={{ base: 'none', md: 'inline-flex' }} fontSize={'xl'} size={'lg'} my={2} fontWeight={600} color={'green.600'}>
          Login
        </Button>
      </NextLink>
    </Stack>);
}
export default SignArea;
