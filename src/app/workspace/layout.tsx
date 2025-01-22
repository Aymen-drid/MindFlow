import ToolBar from '@/components/toolbar';
import AppSidebar from '@/components/app-sidebar';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import WorkSpaceSideBar from './workspace-sidebar';
interface WorkSpaceIdProps {
    children: React.ReactNode
}

const WorkSpaceLayoutId = ({ children }: WorkSpaceIdProps) => {
    return (<div className="h-full">

        <ToolBar />
        <main className='flex h-[calc(100vh-40px)]'>
            <AppSidebar />
            <ResizablePanelGroup
                direction="horizontal"
            >
                <ResizablePanel minSize={11} maxSize={20} defaultSize={18}>
                    <div className='bg-[#5E2C5F] h-full flex justify-center' >

                        <WorkSpaceSideBar />

                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={80} >
                    
                        {children}
                    
                </ResizablePanel>
            </ResizablePanelGroup>


        </main>
    </div>);
}

export default WorkSpaceLayoutId;