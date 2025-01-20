"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export const UserButton=()=>{
return <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>


}
export default UserButton;