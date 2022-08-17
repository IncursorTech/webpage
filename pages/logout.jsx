import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import router from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import { logout } from 'utils/auth';
function Logout() {
    const dispatch = useDispatch();
    console.count('Logout');
    useEffect(() => {
        dispatch(setNavbarStatic(true));
    }, [dispatch]);
    useEffect(() => {
        logout()
            .then(() => {
            setTimeout(() => {
                router.push('/');
            }, 1000);
        })
            .catch(() => {
            setTimeout(() => {
                router.push('/');
            }, 1000);
        });
    }, []);
    return (<Box mt={50} textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'}/>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Successfully Logged Out
      </Heading>
      <Text size="l" color={'gray.500'}>
        You will be redirected to the homepage
      </Text>
    </Box>);
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
            // Will be passed to the page component as props
        },
    };
}
export default Logout;
