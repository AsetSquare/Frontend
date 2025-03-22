// import useAuth from "@/hooks/useAuth/Index";
// import { toast } from "react-hot-toast";
// import { useWallet } from "@jup-ag/wallet-adapter";
// import { useState, useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";

// const PersistLogin = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { auth } = useAuth();
//   const { connect, disconnecting, connected } = useWallet();
//   const navigate = useNavigate();
//   useEffect(() => {
//     const verifyRefreshToken = async () => {
//       try {
//         if (!auth.token) {
//           toast.error("Connect Wallet and Sign Message to Login");
//           navigate("/explorer");
//         }
//         if (disconnecting && connected === false) {
//           auth.apiKey = "";
//           auth.public_key = "";
//           auth.token = "";
//           navigate("/explorer");
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     !auth?.public_key ? verifyRefreshToken() : setIsLoading(false);
//   }, [disconnecting, connected]);

//   return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
// };

// export default PersistLogin;
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "@/hooks/useAuth/Index";
import { useWallet } from "@jup-ag/wallet-adapter";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, setAuth } = useAuth();
  const { disconnecting, publicKey } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        if (!auth.token || !auth.public_key) {
          toast.error("Connect Wallet Get to account");
          navigate("/explorer");
        }
      } catch (err) {
        console.error(err);
        // Clear auth state on error
        setAuth({ token: "", public_key: "", apiKey: "" });
        navigate("/explorer");
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [auth.token, auth.public_key, navigate, setAuth]);

  useEffect(() => {
    if (disconnecting || !publicKey) {
      auth.apiKey = "";
      auth.public_key = "";
      auth.token = "";
      navigate("/explorer");
    }
  }, [disconnecting, publicKey, navigate, setAuth]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <Outlet />;
};

export default PersistLogin;
