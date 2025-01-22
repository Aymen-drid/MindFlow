// import { useConvexAuth } from "convex/react";
// import { useState, useEffect } from "react";
// import { useMutation } from "convex/react";
// import { api } from "../../../../convex/_generated/api";
// import { Id } from "../../../../convex/_generated/dataModel";

// export function useStoreUserEffect() {
//   const { isAuthenticated } = useConvexAuth();
//   const [userId, setUserId] = useState<Id<"users"> | null>(null);
//   const storeUser = useMutation(api.users.store);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       return;
//     }
//     async function createUser() {
//       const id = await storeUser();
//       setUserId(id);
//     }
//     createUser();
//     return () => setUserId(null);
//   }, [isAuthenticated, storeUser]);

//   return {
//     isLoading: isAuthenticated && userId === null,
//     isAuthenticated: isAuthenticated && userId !== null,
//     userId,
//   };
// }