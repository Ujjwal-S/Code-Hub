import { useEffect, useState } from "react"
import {useClient, appId, token, useMicrophoneAndCameraTracks, channelName} from "./agora_config"
import { IAgoraRTCRemoteUser } from "agora-rtc-react";
import Controls from "./Controls";
import Video from "./Video";


const VideoCallBox = () => {
    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([])
    const [start, setStart] = useState(false)  // tell me whether I can now view other people's videos
    const client = useClient()
    const {ready, tracks} = useMicrophoneAndCameraTracks()  // ready denotes my 'readiness' (audio and video)



    useEffect(() => {
        let init = async (name:string) =>{
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);
                if (mediaType === "video") {
                  setUsers((prevUsers) => {
                    return [...prevUsers, user];
                  });
                }
                if (mediaType === "audio") {
                  user.audioTrack?.play();
                }
            });
            
            client.on("user-unpublished", (user, mediaType) => {

                if (mediaType === "audio") {
                  if (user.audioTrack) user.audioTrack.stop();
                }
                if (mediaType === "video") {
                  setUsers((prevUsers) => {
                    return prevUsers.filter((User) => User.uid !== user.uid);
                  });
                }
            });
            
            client.on("user-left", (user) => {
                setUsers((prevUsers) => {
                  return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            try {
                await client.join(appId, name, token, null);  
            } catch (error) {
                console.log("error", error);
            }

            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        }   

        if (ready && tracks) {
            try {
                init(channelName);
            } catch (error) {
                console.log(error);
            }
        }
    }, [channelName, client, ready, tracks])


    return (
        <div className="pb-0 h-full flex flex-col">
            <div className="grow overflow-y-auto scrollable">
                {start && tracks && (
                    <Video tracks={tracks} users={users} />
                    )
                }
            </div>
            <div>
                {
                    ready && tracks && (
                        <Controls tracks={tracks} />
                    )
                }
            </div>
        </div>
    )
}


export default VideoCallBox