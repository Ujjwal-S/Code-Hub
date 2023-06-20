import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeSlice, CodingLanguages } from "./types";

const initialState:CodeSlice = {
    activeCodingLanguage: "python",
    activeCodingLanguageIcon: {
        "cpp": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cpp3.svg",
        "python": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_python.svg",
    },
    codeExecuting: false,
    userCodeInput: "",
    userCode: "",
    codeOutput: "",
}

const codeSlice = createSlice({
    name: 'codeSlice',
    initialState,
    reducers: {
        updateUserInput: (state, action: PayloadAction<string>) => {
            state.userCodeInput = action.payload
        },
        updateCodeExecutionStatus: (state, action: PayloadAction<boolean>) => {
            state.codeExecuting = action.payload
        },
        updateCodingLanguage:  (state, action: PayloadAction<CodingLanguages>) => {
            state.activeCodingLanguage = action.payload
        },
        updateUserCode: (state, action: PayloadAction<string>) => {
            state.userCode = action.payload
        },
        updateCodeOutput: (state, action: PayloadAction<string>) => {
            state.codeOutput = action.payload
        }
    }
})

export const {updateUserInput, updateCodeExecutionStatus, updateCodingLanguage, updateUserCode, updateCodeOutput} = codeSlice.actions
export default codeSlice.reducer