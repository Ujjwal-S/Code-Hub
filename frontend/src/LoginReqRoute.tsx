import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

const LoginReqRoute = () => {
    const roomName = useAppSelector(state => state.appScreen.roomName)
    const username = useAppSelector(state => state.appScreen.username)

    return (roomName && username) ? <Outlet /> : <Navigate to="/" />
}

export default LoginReqRoute;