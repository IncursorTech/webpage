import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';
import { getAuth } from 'utils/auth';

interface User {
  id: number;
  email: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  user: User | null;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
// export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const auth = getAuth();

  const [isAuthenticated, setIsAuthenticated] = useState(auth ? true : false);
  const [user, setUser] = useState(auth?.user ? auth.user : null);

  useEffect(() => {
    try {
      console.log('auth.isAuthenticated', auth);
      if (auth) {
        setUser(auth.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext can only be used inside useAuthContextProvider');
  }
  return context;
}

export default AuthContextProvider;
