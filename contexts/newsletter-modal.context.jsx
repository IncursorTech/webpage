import React, { useContext, useState } from 'react';
export const NewsletterModalContext = React.createContext(null);
export function NewsletterModalContextProvider({ children }) {
    const [isModalOpened, setIsModalOpened] = useState(false);
    return (<NewsletterModalContext.Provider value={{
            isModalOpened,
            setIsModalOpened,
        }}>
      {children}
    </NewsletterModalContext.Provider>);
}
export function useNewsletterModalContext() {
    const context = useContext(NewsletterModalContext);
    if (!context) {
        throw new Error('useNewsletterModalContext can only be used inside NewsletterModalContextProvider');
    }
    return context;
}
