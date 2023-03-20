import filesIconIMG from '../../assets/CodePage/files.svg'
import findIconIMG from '../../assets/CodePage/find.svg'
import peopleIconIMG from '../../assets/CodePage/people.svg'
import gearIconIMG from '../../assets/CodePage/gear.svg'
import githubIconIMG from '../../assets/CodePage/github.svg'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateActiveActive } from '../../store/appScreenSlice'


const ActivityBar = () => {
	const dispatch = useAppDispatch()
	const activeActivity = useAppSelector(state => state.appScreen.activeActivity)

	return (
		<div className='select-none bg-code-page-secondary sticky flex w-14 flex-col align-between h-full justify-between border-r border-seperator flex-shrink-0'>
			<div>
				<div
					onClick={() => dispatch(updateActiveActive("files"))}
					className={`px-4 py-3 hover:cursor-pointer relative ${activeActivity === "files" && 'brightness-200'}`}
				>
					<img src={filesIconIMG} className="h-6 w-6" alt="files" />
					{activeActivity === "files" && <div className='h-12 w-0.5 bg-white absolute left-0 top-0'></div>}
				</div>
				<div
					onClick={() => dispatch(updateActiveActive("find"))}
					className={`px-4 py-3 hover:cursor-pointer relative ${activeActivity === "find" && 'brightness-200'}`}
				>
					<img src={findIconIMG} className="h-6 w-6" alt="find" />
					{activeActivity === "find" && <div className='h-12 w-0.5 bg-white absolute left-0 top-0'></div>}
				</div>
				<div
					onClick={() => dispatch(updateActiveActive("people"))}
					className={`px-4 py-3 hover:cursor-pointer relative ${activeActivity === "people" && 'brightness-200'}`}
				>
					<img src={peopleIconIMG} className="h-6 w-6" alt="people" />
					{activeActivity === "people" && <div className='h-12 w-0.5 bg-white absolute left-0 top-0'></div>}
				</div>
				<div
					onClick={() => dispatch(updateActiveActive("settings"))}
					className={`px-4 py-3 hover:cursor-pointer relative ${activeActivity === "settings" && 'brightness-200'}`}
				>
					<img src={gearIconIMG} className="h-6 w-6" alt="settings" />
					{activeActivity === "settings" && <div className='h-12 w-0.5 bg-white absolute left-0 top-0'></div>}
				</div>
			</div>
			<div>
				<div className="px-4 py-3 hover:cursor-pointer">
					<img src={githubIconIMG} className="h-6 w-6" alt="github" />
				</div>
			</div>
		</div>
	)
}

export default ActivityBar