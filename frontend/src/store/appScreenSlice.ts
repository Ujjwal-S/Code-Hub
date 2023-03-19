import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AcitveActivity, AppScreen } from "./types";

const initialState: AppScreen = {
    activeActivity: "files",
    activeCodingLanguage: "go"
}

const appScreenSlice = createSlice({
    name: 'appScreenSlice',
    initialState,
    reducers: {
        updateActiveActive: (state, action: PayloadAction<AcitveActivity>) => {
            state.activeActivity = action.payload
        }
    }
})

export const { updateActiveActive } = appScreenSlice.actions
export default appScreenSlice.reducer