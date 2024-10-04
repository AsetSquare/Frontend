import { useContext } from "react";
import AuthContext, { AuthContextValue } from "@/context/auth-provider/Index";

const useAuthWallet = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthWallet must be used within an AuthProvider");
  }
  return context;
};

export default useAuthWallet;
