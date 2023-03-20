export type AcitveActivity = "files" | "find" | "settings" | "people"
export type CodingLanguages =
    "cpp" |
    "go" |
    "java" |
    "javascript" |
    "python" |
    "rust" |
    "sql"

export type AppScreen = {
    activeActivity: AcitveActivity,
}
export type CodeSlice = {
    activeCodingLanguage: CodingLanguages,
    activeCodingLanguageIcon: {
        [key in CodingLanguages]: string
    },
    userInput: string,
    codeExecuting: boolean
}