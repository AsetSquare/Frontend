import useAuth from "@/hooks/useAuth/Index";
import { toast } from "react-hot-toast";
import { useWallet } from "@jup-ag/wallet-adapter";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();
  const { publicKey, wallet } = useWallet();
  const navigate = useNavigate();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        if (!wallet) {
          toast.error("Please Connect Walet");
          navigate("/explorer");
        } else if (publicKey) {
          auth.public_key = publicKey.toBase58();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.public_key ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
