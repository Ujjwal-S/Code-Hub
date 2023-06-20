export type AcitveActivity = "files" | "find" | "settings" | "people"
export type CodingLanguages =
    "cpp" |
    "python"

export type AppScreen = {
    activeActivity: AcitveActivity,
    roomName: string,
    username: string
}
export type CodeSlice = {
    activeCodingLanguage: CodingLanguages,
    activeCodingLanguageIcon: {
        [key in CodingLanguages]: string
    },
    userCodeInput: string,
    userCode: string,
    codeOutput: string,
    codeExecuting: boolean
}