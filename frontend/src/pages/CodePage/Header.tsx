import { FormEvent } from "react"
import runIconImg from "../../assets/CodePage/run.svg"
import shareIconImg from "../../assets/CodePage/share.svg"
import savedIconImg from "../../assets/CodePage/saved.svg"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { updateCodeExecutionStatus, updateCodeOutput } from "../../store/codeSlice"
import { toast } from "react-hot-toast"

const Header = () => {
    const dispatch = useAppDispatch()
    const codeExecuting = useAppSelector(state => state.codeContext.codeExecuting)
    const roomName = useAppSelector(state => state.appScreen.roomName)
    const language= useAppSelector(state => state.codeContext.activeCodingLanguage)
    const input= useAppSelector(state => state.codeContext.userCodeInput)
    const code= useAppSelector(state => state.codeContext.userCode)

    async function copyRoomName() {
        try{
            await navigator.clipboard.writeText(roomName)
            toast.success("Room Name Copied!")
        }catch(err) {
            toast.error("Something went wrong, try again")
        }
    }

    async function executeCode(e:FormEvent) {
        dispatch(updateCodeExecutionStatus(true))
        fetch("http://localhost:3000/api/compile", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    language,
                    code,
                    input
                })
        })
        .then(response => response.json())           
        .then(json => {
            dispatch(updateCodeExecutionStatus(false))
            if (json.error) {
                toast.error("Something went wrong :(")
            }else {
                dispatch(updateCodeOutput(json.output))
            }
        })
        .catch(err => {
            console.log("Error while trying to execute code -> ", err)
            toast.error("Something went wrong :(")
            dispatch(updateCodeExecutionStatus(false))
        })
    }

    return (
        <header className="flex justify-between items-center pl-4 py-1 bg-code-page-secondary border-b border-seperator">
            <div className="flex justify-between items-center">
            <img src={savedIconImg} className="mr-1 scale-125" alt="share" />
                <span className="ml-2">Saved</span>
            </div>
            {/* <h2>Room Name</h2> */}
            <div className="flex justify-between items-center">
                <button 
                    onClick={copyRoomName}
                    className="flex justify-between items-center border-2 border-gray-400 rounded-md px-3 py-1 mr-4">
                    <img src={shareIconImg} className="scale-75 mr-1" alt="share" />
                    <span>Share</span>
                </button>
                <button className={`${codeExecuting && 'animate-pulse'} flex justify-between items-center border-2 border-gray-400 rounded-md px-3 py-1 mr-4`}
                    onClick={executeCode}
                >
                    <img src={runIconImg} className="scale-75 mr-1"  alt="run" />
                    <span>{codeExecuting ? 'Executing' : 'Run Code'}</span>
                </button>
            </div>
        </header>
    )   
}

export default Header;