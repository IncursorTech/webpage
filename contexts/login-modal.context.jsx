import React, { useContext, useState } from 'react';
export const LoginModalContext = React.createContext(null);
export function LoginModalContextProvider({ children }) {
    const [isModalOpened, setIsModalOpened] = useState(false);
    return (<LoginModalContext.Provider value={{
            isModalOpened,
            setIsModalOpened,
        }}>
      {children}
    </LoginModalContext.Provider>);
}
export function useLoginModalContext() {
    const context = useContext(LoginModalContext);
    if (!context) {
        throw new Error('useLoginModalContext can only be used inside LoginModalContextProvider');
    }
    return context;
}
