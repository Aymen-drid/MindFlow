"use client"
import { useEffect } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export const UserButton = () => {
  const isLoading  =false
  const user = {name:"aymen",image:"n"};
  console.log("UserButton render - user:", user, "isLoading:", isLoading)
  const { signOut } = useAuthActions();
  const avatarFallBackName=user.name?.charAt(0).toUpperCase();
  return <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>{avatarFallBackName}</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>{signOut()}} className="relative">Log out <LogOut className="absolute top-2.5 right-3"/></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
}
