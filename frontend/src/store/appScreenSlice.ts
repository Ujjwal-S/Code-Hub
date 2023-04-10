import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AcitveActivity, AppScreen } from "./types";

const initialState: AppScreen = {
    activeActivity: "files",
    roomName: "",
    username: ""
}

const appScreenSlice = createSlice({
    name: 'appScreenSlice',
    initialState,
    reducers: {
        updateActiveActive: (state, action: PayloadAction<AcitveActivity>) => {
            state.activeActivity = action.payload
        },
        updateRoomName: (state, action: PayloadAction<string>) => {
            state.roomName = action.payload
        },
        updateUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export const { updateActiveActive, updateRoomName, updateUsername } = appScreenSlice.actions
export default appScreenSlice.reducer