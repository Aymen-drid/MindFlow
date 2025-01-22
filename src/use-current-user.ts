// import { useQuery } from "convex/react";
// import { isAuthenticated } from "../convex/auth";
// import { useEffect } from "react";
// export const UseCurrentUser = () => {
//   const data = useQuery(api.users.current);
//   const [authStatus, setAuthStatus] = useState<boolean>(false);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       // isAuthenticated takes (req, res) for server-side
//       // or no parameters for client-side
//       const authed = await isAuthenticated(null, null);
//       console.log("Auth status check:", authed);
//       setAuthStatus(authed);
//     };
//     checkAuthStatus();
//   }, []);

//   const isLoading = data === undefined;

//   console.log("UseCurrentUser - data:", data, "isAuthenticated:", authStatus);

//   return { data, isLoading, isAuthenticated: authStatus };
// };