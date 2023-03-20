import VideoCall from "./VideoCall"
import { useAppSelector } from "../../../../store/hooks";

const People = () => {
    const activeActivity = useAppSelector(state => state.appScreen.activeActivity)

    return (
        <div className={`bg-primary absolute top-0 h-full w-full ${activeActivity === "people" ? 'z-20' : '-z-20'}`}>
            <VideoCall />
        </div>
    )
}


export default People