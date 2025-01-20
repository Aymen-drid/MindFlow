'use client'
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
export default function Home() {
      const { signOut } = useAuthActions();
  return (


      <div className="w-full h-full  bg-[#5c3b58]">
        <h1>You are logged in</h1>
        <Button onClick={()=>{signOut()}}>Log out</Button>
      </div>
 
  )
}
