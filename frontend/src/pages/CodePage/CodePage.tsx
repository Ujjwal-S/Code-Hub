import ActivityBar from "./ActivityBar";
import Header from "./Header";
import SidePanel from "./SidePanel/SidePanel";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

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
                    
                    <ReflexSplitter className="w-3 bg-code-page-section-splitter cursor-col-resize" />

                    <ReflexElement>

                        <div className="bg-red-600 w-full">Code Editor</div>
                    </ReflexElement>
                </ReflexContainer>
            </div>
        </div>
    )
}

export default CodePage;