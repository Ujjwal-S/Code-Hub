import ActivityBar from "./ActivityBar";
import Header from "./Header";

const CodePage = () => {
    return (
        <div className="bg-code-page text-white w-screen h-screen flex flex-col">
            <Header />
            <div className="grow">
                <ActivityBar />
            </div>
        </div>
    )
}

export default CodePage;