import React from "react";
import { Home, MessageSquareDashed, Activity, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "./user-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const items = [
  { icon: <Home />, label: "Home", href: "/home" },
  { icon: <MessageSquareDashed />, label: "Messages", href: "/messages" },
  { icon: <Activity />, label: "Activity", href: "/activity" },
  { icon: <MoreHorizontal />, label: "More", href: "/more" },
];

export function AppSidebar() {
  return (
    <aside className="bg-[#481349] w-[70px] h-full flex flex-col gap-y-4 items-center">
      {/* Avatar Button */}
      <Button className="text-white hover:bg-[#5c1960] transition-colors w-12 h-12 p-0" variant="transparent">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </Button>

      {/* Sidebar Items */}
      {items.map((item, index) => (
        <Button
          key={index}
          className="text-white hover:bg-[#5c1960] transition-colors w-12 h-12 p-0"
          variant="transparent"
          asChild
        >
          <Link href={item.href} aria-label={item.label}>
            {React.cloneElement(item.icon, { className: "w-6 h-6" })}
          </Link>
        </Button>
      ))}

      {/* User Button */}
      <div className="flex flex-col justify-center mt-auto items-center">
        <UserButton />
      </div>
    </aside>
  );
}

export default AppSidebar;