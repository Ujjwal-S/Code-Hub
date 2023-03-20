import { useAppSelector } from "../../../store/hooks";
import closeImgURL from "../../../assets/CodePage/close.svg"


const Tab = () => {
    const activeCodingLanguage = useAppSelector(state => state.codeContext.activeCodingLanguage)
    const fileIconLink = useAppSelector(state => state.codeContext.activeCodingLanguageIcon[activeCodingLanguage])

    return (
        <div className="flex bg-code-page-secondary">
            <div className="py-2 w-fit flex justify-start items-center space-x-2 px-3 bg-primary  hover:cursor-pointer">
                <img className="w-4 h-4 select-none" draggable={false} src={fileIconLink} alt="icon" />
                <div>main.go</div>
                <img className="w-2.5 h-2.5 relative -bottom-[1px] select-none" draggable={false} src={closeImgURL} alt="close tab" />
            </div>
        </div>
    )
}

export default Tab;