import {Toaster} from "react-hot-toast"
import HomePage from "./pages/HomePage/HomePage"
import CodePage from "./pages/CodePage/CodePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginReqRoute from "./LoginReqRoute"

const App = () => {
  return (
    <>
    	<div>
			<Toaster position="top-center" />
		</div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route element={ <LoginReqRoute />} >
					<Route path="/editor/" element={<CodePage />} />
                </Route>
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
