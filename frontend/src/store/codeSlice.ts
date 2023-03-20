import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeSlice } from "./types";

const initialState:CodeSlice = {
    activeCodingLanguage: "go",
    userInput: "",
    codeExecuting: false,
    activeCodingLanguageIcon: {
        "cpp": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cpp3.svg",
        "javascript": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js_official.svg",
        "python": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_python.svg",
        "go": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_go.svg",
        "java": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_java.svg",
        "rust": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_light_rust.svg",
        "sql": "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_sql.svg"
    }
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