import WorkSpaceSideBarHeader from './workspace-header';
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { SideBar } from '@/components/sidebar';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons/lib';
import { cva } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';
interface SideBarItemProps { 
    label:string,id:string,icon:LucidIcon| IconType;
}
const SideBarItemVariants = cva("flex items-center gap-1.5 font-normal h-7 px-[18px] text-small overflow-hidden", {
    variants: {
        variant: {
            default: "text-[#f9edffcc]",
            active: "text-[#481349] bg-white/90 hover:bg-white/90"
        },defaultVariants:{
            variant:"default"
        }
    }
});
const SideBarItem=({label,id,icon:Icon}:SideBarItemProps)=>{
return <Button className={cn(SideBarItemVariants({variant}))}> 
    <Link>
    <Icon/>
    <span>{label}</span>
    </Link>
</Button>
}
export const WorkSpaceSideBar=()=>{
    return <div>
        <WorkSpaceSideBarHeader/>
        <div>
      <SideBarItem label={"threads"} id="18" icon=<Loader/> />
    
        </div>
    </div>
}
export default WorkSpaceSideBar;