import { RoomModeType } from "../types"
import logoImageUrl from "../../assets/HomePage/logo.png"
import translationIconUrl from "../../assets/HomePage/translation.svg"

type NavbarProps = {
    roomMode: RoomModeType,
    updateRoomMode: (_:RoomModeType) => void
}

const Navbar = (props:NavbarProps) => {
    const switchRoomMode = () =>{
        if (props.roomMode === "create"){
            return props.updateRoomMode("join")
        }
        props.updateRoomMode("create")
    }

    return (
        <header className="flex justify-between">
            <img 
                src={logoImageUrl} 
                className="h-16 select-none" 
                alt="CodeHub Logo" 
                draggable={false}
            />
            <ul className="flex text-xl font-semibold justify-center items-center pt-4">
                <li className="mr-7 cursor-pointer hover-underline-animation h-fit px-1"
                    onClick={switchRoomMode}
                >
                    {props.roomMode === "create" && 'Join a Room'}
                    {props.roomMode === "join" && 'Create a Room'}
                </li>
                <li className="mr-7 cursor-pointer hover-underline-animation h-fit px-1">
                    <a href="/">Github</a>
                </li>
                <li className="mr-7 cursor-pointer">
                    <img 
                        src={translationIconUrl} 
                        className="relative select-none" 
                        alt="Translate" 
                        draggable={false}
                    />
                </li>
            </ul>
        </header>
    )
}

export default Navbar;