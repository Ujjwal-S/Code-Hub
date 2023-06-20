import { useAppSelector } from "../../../store/hooks"
import { CodingLanguages } from "../../../store/types"
import getFileExtention from "../../../utils/getFileExtention"

const File = () => {
    const codingLanguage = useAppSelector(state => state.codeContext.activeCodingLanguage)
    const fileIconLink = useAppSelector(state => state.codeContext.activeCodingLanguageIcon[codingLanguage])

    return (
        <div className="flex items-center pl-2 hover:bg-[#2a2d2e] hover:cursor-pointer">
            <img src={fileIconLink} className="w-5 relative -bottom-[1px] mr-1" alt="icon" />
            <span className="">main{getFileExtention(codingLanguage)}</span>
        </div>
    )
}


export default File