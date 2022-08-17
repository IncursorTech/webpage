import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useAuthContext } from 'contexts/auth.context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import { getAuth, login } from 'utils/auth';
import { verifyEmail, verifyPassword } from 'utils/input-verifier';
import signInImage from '../media/img/signup.png';
// Chakra imports
// Assets

const PrimaryButtonColor = '#00bddd';
const SecondaryButtonColor = '#e74e84';
const ActiveButtonColor = '#0a58ca';

function Login() {
  // Chakra color mode
  const titleColor = useColorModeValue('teal.300', 'teal.200');
  const textColor = useColorModeValue('gray.400', 'white');
  const errorColor = useColorModeValue('red.400', 'white');
  const successColor = useColorModeValue('green.400', 'white');

  const [cookies, setCookie] = useCookies(['access_token', 'user']);
  const { setIsAuthenticated } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageTextColor, setMessageTextColor] = useState(textColor);

  const dispatch = useDispatch();

  useEffect(() => {
    // redirect to home if already logged in
    if (getAuth()) {
      router.push('/');
    }
  }, []);

  function onSubmit() {
    if (!verifyEmail(email)) {
      setMessage('Please enter a valid email address');
      return;
    }
    if (!verifyPassword(password)) {
      setMessage('Please enter a valid password');
      return;
    }

    login({ email, password })
      .then((result) => {
        setMessageTextColor(successColor);
        setMessage('Login successful');

        const expires = new Date();
        expires.setTime(expires.getTime() + 300 * 1000);
        setCookie('access_token', result.token, { path: '/', expires });
        setCookie('user', result.user, { path: '/', expires });

        setIsAuthenticated(true);
        setTimeout(() => {
          const returnUrl = router.query.returnUrl || '/';
          router.push(returnUrl);
        }, 1000);
      })
      .catch((error: any) => {
        setMessageTextColor(errorColor);
        if (error.response.data.errors[0].message === 'The email or password provided is incorrect.') {
          setMessage('The email or password provided is incorrect.');
          return;
        }
        if (error.response.data.errors[0].message === 'This user is locked due to having too many failed login attempts.') {
          setMessage(
            'This user is locked due to having too many failed login attempts. Please try again in 5 minutes or communicate with admin.',
          );

          return;
        }

        setMessage('An error occurred. Please try again.');
        // setMessage(error.response.data.errors[0].message);
      });
  }

  useEffect(() => {
    dispatch(setNavbarStatic(true));
  }, [dispatch]);

  return (
    <LoginContainer>
      <Flex position="relative">
        <Flex
          h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          mb="30px"
          pt={{ sm: '100px', md: '0px' }}
        >
          <Flex alignItems="center" justifyContent="start" style={{ userSelect: 'none' }} w={{ base: '100%', md: '50%', lg: '42%' }}>
            <Flex direction="column" w="100%" background="transparent" p="20px">
              <Heading color={PrimaryButtonColor} fontSize="32px" mb="10px">
                Welcome Back
              </Heading>
              <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="20px">
                Enter your email and password to sign in
              </Text>
              <FormControl>
                <FormLabel ms="4px" fontSize="xl" fontWeight="normal">
                  Email
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="xl"
                  type="text"
                  placeholder="Your email adress"
                  size="lg"
                  onChange={(event) => {
                    setMessage('');
                    setEmail(event.target.value);
                  }}
                />
                <FormLabel ms="4px" fontSize="xl" fontWeight="normal">
                  Password
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="xl"
                  type="password"
                  placeholder="Your password"
                  size="lg"
                  onChange={(event) => {
                    setMessage('');
                    setPassword(event.target.value);
                  }}
                />
                <FormControl display="flex" alignItems="center">
                  <FormLabel mb="0" ms="1" fontWeight="normal" fontSize="xl" color={errorColor}>
                    {message}
                  </FormLabel>
                </FormControl>
                <Button
                  fontSize="10px"
                  type="submit"
                  bg={PrimaryButtonColor}
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: SecondaryButtonColor,
                  }}
                  _active={{
                    bg: ActiveButtonColor,
                  }}
                  onClick={onSubmit}
                >
                  LOGIN
                </Button>
              </FormControl>
              <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
                <Text color={textColor} fontWeight="medium">
                  Don't have an account?
                  <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                    Register
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box display={{ base: 'none', md: 'block' }} overflowX="hidden" h="100%" w="40vw" position="absolute" right="0px">
            <Box
              bgImage={signInImage.src}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              borderBottomLeftRadius="20px"
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </LoginContainer>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
      // Will be passed to the page component as props
    },
  };
}

export default Login;

const LoginContainer = styled.div`
  margin-top: 15px;
`;
