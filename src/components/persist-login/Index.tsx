// import useAuth from "@/hooks/useAuth/Index";
// import useRefreshToken from "@/hooks/useRefreshToken/Index";
// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";

// const PersistLogin = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { auth } = useAuth();
//   const refresh = useRefreshToken();

//   useEffect(() => {
//     const verifyRefreshToken = async () => {
//       try {
//         await refresh();
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
//   }, []);

//   return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
// };

// export default PersistLogin;
