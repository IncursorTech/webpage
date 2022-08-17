import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CustomContainer from './CustomContainer';
import Overlay from './Overlay';
import { login } from '../utils/auth';
import { verifyEmail, verifyPassword } from '../utils/inputVerifier';

export interface Options {
  id: string;
  label: string;
}

export interface LoginModalProps {
  className?: string;
  placeholder: string;
  submitLabel?: string;
  options?: Options[];
  onClose?: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginModalv2({ onClose, placeholder }: LoginModalProps) {
  const [userCookie, setUserCookie] = useCookies(['user']);
  const [tokenCookie, setTokenCookie] = useCookies(['token']);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEscClose({ onClose });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
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

    login(email, password)
      .then((data) => {
        if (data.errors) {
          setMessage(data.errors[0].message);
          return;
        }
        setUserCookie('user', data.user.id, { path: '/' });
        setTokenCookie('token', data.token, { path: '/' });
        onClose();
      })
      .catch((error) => {
        throw Error(error);
      });
  }

  return (
    <Overlay>
      <CustomContainer>
        <div id="login-2">
          <h1>Please login to Findoctor!</h1>
          <form>
            <div className="box_form clearfix">
              <div className="box_login">
                <a href="#0" className="social_bt facebook">
                  Login with Facebook
                </a>
                <a href="#0" className="social_bt google">
                  Login with Google
                </a>
                <a href="#0" className="social_bt linkedin">
                  Login with Linkedin
                </a>
              </div>
              <div className="box_login last">
                <div className="form-group">
                  <input type="text" className="search-query" placeholder={'Your email address'} onChange={onChange} />
                </div>
                <div className="form-group">
                  <input type="text" className="search-query" placeholder={'Your password'} onChange={onChange} />
                  <a href="#0" className="forgot">
                    Forgot password?
                  </a>
                </div>
                <div className="form-group">
                  <CustomButtonLogin onClick={() => {}}>
                    Login <span>&rarr;</span>
                  </CustomButtonLogin>
                </div>
              </div>
            </div>
          </form>
          <p className="text-center link_bright">
            Do not have an account yet?{' '}
            <a href="#0">
              <strong>Register now!</strong>
            </a>
          </p>
        </div>
      </CustomContainer>
    </Overlay>
  );
}

const CustomButtonLogin = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1.25rem;
`;
