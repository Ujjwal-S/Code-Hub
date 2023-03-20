import ActivityBar from "./ActivityBar";
import Header from "./Header";
import SidePanel from "./SidePanel/SidePanel";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import CodeEditor from "./CodeEditor/CodeEditor";
import InputOutput from "./InputOutput";

const CodePage = () => {
    return (
        <div className="bg-code-page text-white w-screen h-screen flex flex-col">
            <Header />
            <div className="grow flex">
                <ActivityBar />
                <ReflexContainer orientation="vertical" className="flex w-full overflow-hidden">
                    <ReflexElement flex={0.18} className="min-w-0" >
                        <SidePanel />
                    </ReflexElement>
                    
                    <ReflexSplitter className="w-3 bg-code-page-secondary cursor-col-resize z-50" />

                    <ReflexElement className="min-w-0 z-50">
                        <CodeEditor />
                    </ReflexElement>

                    <ReflexSplitter className="w-3 bg-code-page-secondary cursor-col-resize" />

                    <ReflexElement flex={0.3} className="min-w-0 h-full">
                        <InputOutput />
                    </ReflexElement>

                    
                </ReflexContainer>
            </div>
        </div>
    )
}

export default CodePage;