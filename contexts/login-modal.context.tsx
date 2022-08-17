import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface LoginModalContextProps {
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const LoginModalContext = React.createContext<LoginModalContextProps | null>(null);

export function LoginModalContextProvider<T>({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
}

export function useLoginModalContext() {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error('useLoginModalContext can only be used inside LoginModalContextProvider');
  }
  return context;
}
