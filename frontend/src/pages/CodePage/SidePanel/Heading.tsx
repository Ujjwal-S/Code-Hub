import addFileIMG from "../../../assets/CodePage/add_file.svg"
import addFolderIMG from "../../../assets/CodePage/add_folder.svg"
import threeDotsIMG from "../../../assets/CodePage/three_dots.svg"


const Heading = () => {
  return (
    <div className='flex w-full justify-between h-fit items-center px-2 py-1 border-b border-seperator'>
      <div className='flex flex-grow font-semibold'>CODE</div>
      <div className='flex space-x-3 items-center'>
        <img src={addFileIMG} className="h-4 w-4 hover:cursor-pointer" />
        <img src={addFolderIMG} className="h-5 w-5 hover:cursor-pointer" />
        <img src={threeDotsIMG} className="h-4 w-4 hover:cursor-pointer" />
      </div>
    </div>
  )
}


export default Heading