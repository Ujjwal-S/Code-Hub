import Heading from "./Heading";
import File from "./File";
import People from "./People/People";

const SidePanel = () => {
    return (
        <div className="h-full min-w-[160px] relative">
                <Heading />
                <File />
                <People />
        </div>
    )
}

export default SidePanel;