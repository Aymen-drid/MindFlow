import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";
// In your users.ts
// users.ts
export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    console.log("Current query - userId:", userId);
    
    if (userId === null) {
      return null;
    }

    const user = await ctx.db.get(userId);
    console.log("Current query - found user:", user);
    return user;
  },
});