import { Button } from "./ui/button";
import { Search, Info } from "lucide-react";
export const ToolBar = () => {
    return (
        <nav className="bg-[#481349] flex items-center justify-center h-10 p-1.5 flex-row">

            <div className="flex-1" />

            <div className="grow-[2] min-w-[280px] max-[642] shrink">
                <Button size="sm" className=" w-full justify-start mr-2 bg-accent/25 hover:bg-accent-25"><Search className="size-4 text-white mr-2" />
                <span className="text-white text-xs">Search workspace</span>
                </Button>
            </div>
            <div className="flex flex-1 ml-auto items-center justify-end">
                <Button className="" variant="transparent" size="icomSm"><Info className="size-5 text-white" /></Button>
            </div>
        </nav>
    );
}

export default ToolBar;