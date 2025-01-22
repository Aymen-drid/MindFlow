// import {query} from './_generated/server'
// export const get = query({
//     args: {},
//     handler: async (ctx) => {
//       try {
//         const workspaces = await ctx.db.query("workspaces").collect();
//         return workspaces;
//       } catch (error) {
//         console.error("Failed to fetch workspaces:", error);
//         throw new Error("Failed to fetch workspaces");
//       }
//     },
//   });