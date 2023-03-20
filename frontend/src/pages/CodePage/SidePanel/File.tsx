import { useAppSelector } from "../../../store/hooks"

const fileIconLinks = {
    "cpp": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cpp3.svg",
    "javascript": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js_official.svg",
    "python": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_python.svg",
    "go": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_go.svg",
    "java": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_java.svg",
    "rust": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_light_rust.svg",
    "sql": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_sql.svg"
}

const File = () => {
    const codingLanguage = useAppSelector(state => state.codeContext.activeCodingLanguage)

    return (
        <div className="flex items-center pl-2 hover:bg-[#2a2d2e] hover:cursor-pointer">
            <img src={fileIconLinks[codingLanguage]} className="w-5 relative -bottom-[1px] mr-1" alt="icon" />
            <span className="">main.go</span>
        </div>
    )
}


export default File