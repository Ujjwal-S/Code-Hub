import { useAppSelector } from "../../../store/hooks";
import closeImgURL from "../../../assets/CodePage/close.svg"

const fileIconLinks = {
    "cpp": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cpp3.svg",
    "javascript": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js_official.svg",
    "python": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_python.svg",
    "go": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_go.svg",
    "java": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_java.svg",
    "rust": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_light_rust.svg",
    "sql": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_sql.svg"
}

const Tab = () => {
    const activeCodingLanguage = useAppSelector(state => state.codeContext.activeCodingLanguage)

    return (
        // <div className='flex text-white pt-1 bg-[#252525] select-none overflow-auto'>
        // <div className="flex bg-[#1e1e1e] px-5 py-2 space-x-8 items-center justify-between hover:cursor-pointer border border-white">
        //     <div className='flex items-center space-x-2 border border-white'>
        //         <div className="w-4 h-4"><img src={fileIconLinks[activeCodingLanguage]} /></div>
        //         <div>main.go</div>
        //     </div>
        // </div>
        // </div>
        <div className="flex bg-code-page-secondary">
            <div className="py-2 w-fit flex justify-start items-center space-x-2 px-3 bg-primary  hover:cursor-pointer">
                <img className="w-4 h-4 select-none" draggable={false} src={fileIconLinks[activeCodingLanguage]} alt="icon" />
                <div>main.go</div>
                <img className="w-2.5 h-2.5 relative -bottom-[1px] select-none" draggable={false} src={closeImgURL} alt="close tab" />
            </div>
        </div>
    )
}

export default Tab;