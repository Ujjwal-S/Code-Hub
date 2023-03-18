import { useState } from "react";
import { RoomModeType } from "../types";
import Navbar from "./Navbar";
import homeImgURL from "../../assets/HomePage/home.png";
import arrowForwardImgURL from "../../assets/HomePage/arrow_forward.svg"

const HomePage = () => {
    const [roomMode, setRoomMode] = useState<RoomModeType>("join")
    const updateRoomMode = (updateTo:RoomModeType) => {
        setRoomMode(updateTo);
    }

    return (
        <div className="bg-primary text-white w-screen h-screen">
            <div className="flex flex-col max-w-7xl h-full mx-auto">
                <Navbar updateRoomMode={updateRoomMode} roomMode={roomMode} />
                <div className="grow home-background">
                    <div className="py-8 px-6 shadow-2xl bg-home-box-bg rounded-lg w-96 mx-auto my-32">
                        <div className="flex justify-center items-start mb-6">
                            <img src={homeImgURL} alt="room icon" draggable="false" />
                            <h4 className="pl-3 text-xl font-bold tracking-wide">
                                { roomMode === "create" ? 'Create A Room' : 'Enter Room Name' }
                            </h4>
                        </div>
                        <div>
                            <input
                                className="outline-none bg-home-input-bg px-4 py-2 rounded-xl w-full text-sm"
                                type="text" 
                                placeholder="Room Name" 
                            />
                            <p className="text-sm text-secondary w-3/4 text-center mx-auto mt-6">
                                {roomMode === "create"
                                    ? 'Create a room, invite your colleagues and start coding.'
                                    : 'Already got a room? Enter the room name and join!'
                                }
                            </p>
                        </div>
                        <button 
                            className="flex justify-center items-center bg-primary-button rounded-full w-[35%] py-1 mx-auto mt-3">
                            Next
                            <img src={arrowForwardImgURL} alt="next" className="ml-1 scale-90" draggable="false" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;