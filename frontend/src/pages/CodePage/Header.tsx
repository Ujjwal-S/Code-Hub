import runIconImg from "../../assets/CodePage/run.svg"
import shareIconImg from "../../assets/CodePage/share.svg"
import savedIconImg from "../../assets/CodePage/saved.svg"


const Header = () => {
    return (
        <header className="flex justify-between items-center pl-4 py-1 border-b border-[#343434]">
            <div className="flex justify-between items-center">
            <img src={savedIconImg} className="mr-1 scale-125" alt="share" />
                <span className="ml-2">Saved</span>
            </div>
            <h2>Room Name</h2>
            <div className="flex justify-between items-center">
                <button className="flex justify-between items-center border-2 border-gray-400 rounded-md px-3 py-1 mr-4">
                    <img src={shareIconImg} className="scale-75 mr-1" alt="share" />
                    <span>Share</span>
                </button>
                <button className="flex justify-between items-center border-2 border-gray-400 rounded-md px-3 py-1 mr-4">
                    <img src={runIconImg} className="scale-75 mr-1"  alt="run" />
                    <span>Run Code</span>
                </button>
            </div>
        </header>
    )   
}

export default Header;