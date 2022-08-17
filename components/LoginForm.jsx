import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import Input from './Input';
import { login } from '../utils/auth';
import { verifyEmail, verifyPassword } from '../utils/input-verifier';
import { useAuthContext } from 'contexts/auth.context';
export default function LoginForm({ onSuccess }) {
    const [userCookie, setUserCookie] = useCookies(['user']);
    const [tokenCookie, setTokenCookie] = useCookies(['token']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setIsAuthenticated } = useAuthContext();
    function onSubmit(event) {
        event.preventDefault();
        setMessage('');
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
            setMessage('Login successful');
            setUserCookie('user', result.user);
            setTokenCookie('token', result.token);
            setIsAuthenticated(true);
            onSuccess();
        })
            .catch((error) => {
            setMessage('Invalid email or password');
            // setMessage(error.response.data.errors[0].message);
        });
    }
    return (<Card onSubmit={(event) => onSubmit(event)}>
      <Title>Log in to your account</Title>
      <Row>
        <CustomInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
      </Row>
      <Row>
        <CustomInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required/>
      </Row>
      <Row>
        <CustomButton as="button" type="submit">
          Login
        </CustomButton>
      </Row>
      {message && <ErrorMessage dangerouslySetInnerHTML={{ __html: message }}/>}
    </Card>);
}
const Card = styled.form `
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;
const Title = styled.div `
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;
const ErrorMessage = styled.p `
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;
const Row = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
const CustomButton = styled(Button) `
  height: 100%;
  padding: 1.8rem;
  margin-left: 1.5rem;
  box-shadow: var(--shadow-lg);

  ${media('<=tablet')} {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;
const CustomInput = styled(Input) `
  width: 60%;

  ${media('<=tablet')} {
    width: 100%;
  }
`;
