import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeSlice } from "./types";

const initialState:CodeSlice = {
    activeCodingLanguage: "go",
    userInput: "",
    codeExecuting: false
}

const codeSlice = createSlice({
    name: 'codeSlice',
    initialState,
    reducers: {
        updateUserInput: (state, action: PayloadAction<string>) => {
            state.userInput = action.payload
        },
        updateCodeExecutionStatus: (state, action: PayloadAction<boolean>) => {
            state.codeExecuting = action.payload
        }
    }
})

export const {updateUserInput, updateCodeExecutionStatus} = codeSlice.actions
export default codeSlice.reducer