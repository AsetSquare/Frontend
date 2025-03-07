import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthProps {
  children: ReactNode;
}

interface AuthContextProps {
  apiKey: string;
  token: string;
  public_key: string;
}

export interface AuthContextValue {
  auth: AuthContextProps;
  setAuth: Dispatch<SetStateAction<AuthContextProps>>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProps) => {
  const [auth, setAuth] = useState<AuthContextProps>({
    apiKey: "",
    token: "",
    public_key: "",
  });

  const contextValue: AuthContextValue = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
