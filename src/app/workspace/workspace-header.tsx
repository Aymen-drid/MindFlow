"use client"; // Ensure this is at the top for client-side rendering

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function WorkSpaceSideBarHeader() {
  return (<div className="flex items-center  justify-start  h-[49px] px-4  gap-0.5">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="transparent" className="font-semibold text-lg border-none text-white  w-auto  p-1.5  overflow-hidden" size="sm">
          <span>Code Test</span>
          <ChevronDown className="size-4 ml-1 shrink-0" />        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <div className="flex flex-col">
            <p>H</p>
            <div className="mt-2">
              <p>Github</p>
              <p className="text-sm text-muted-foreground">Active WorkSpace</p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>);
}

export default WorkSpaceSideBarHeader;