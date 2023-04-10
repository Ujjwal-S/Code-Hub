import ActivityBar from "./ActivityBar";
import Header from "./Header";
import SidePanel from "./SidePanel/SidePanel";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import CodeEditor from "./CodeEditor/CodeEditor";
import InputOutput from "./InputOutput";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { socket } from "./socket";
import { toast } from "react-hot-toast";



const CodePage = () => {
    const socketRef = useRef<any>(null);
    const navigate = useNavigate()
    const roomName = useAppSelector(state => state.appScreen.roomName)
    const myusername = useAppSelector(state => state.appScreen.username)
    
    useEffect(() => {
        socket.connect()
        socket.on('connect_error', (err:any) => handleErrors(err));
        socket.on('connect_failed', (err:any) => handleErrors(err));

        function handleErrors(e:any) {
            console.log('socket error', e);
            toast.error('Socket connection failed, try again!');
            navigate('/')
        }

        console.log(">>> MAI CHAALA")

        socket.emit('join', {
            roomName,
            username: myusername
        })

        const userJoined = 
        ({clients, username, socketId}: {clients:any, username:string, socketId:string}) => {
            if (username !== myusername) {
                toast.success(`${username} has joined the room.`)
            }
        }
        socket.on('joined', userJoined)

        const userLeft = 
        ({ socketId, username }: {socketId: string, username: string}) => {
            toast.success(`${username} left the room.`, {
                icon: '👋',
            });
        }
        socket.on('disconnected', userLeft);


        return () => {
            socket.disconnect();
            socket.off('joined', userJoined)
            socket.off('disconnected', userLeft)
        }
    }, [])


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