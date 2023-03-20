import { useState, useEffect } from "react";
import { AgoraVideoPlayer } from "agora-rtc-react";
import { IAgoraRTCRemoteUser, IMicrophoneAudioTrack, ICameraVideoTrack } from "agora-rtc-react";

type PropType = {
    users: IAgoraRTCRemoteUser[],
    tracks: [IMicrophoneAudioTrack, ICameraVideoTrack]
}

const Video = (props: PropType) => {
    
    return(
        <>
        <AgoraVideoPlayer className="h-48 w-[90%] mx-auto mt-3" videoTrack={props.tracks[1]} />
                
                {/* Other Users */}
                {props.users.length > 0 && props.users.map(user => {
                        if (user.videoTrack) {
                            return <AgoraVideoPlayer className="h-52 w-[90%] mx-auto mt-3" videoTrack={user.videoTrack} key={user.uid}/>
                        }
                    })
                    
                }
        </>
    )
}

export default Video;