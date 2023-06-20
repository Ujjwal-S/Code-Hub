import {CodingLanguages} from "../store/types"

export default function getFileExtention(lang: CodingLanguages) {
    if (lang === "python") return ".py"
    if (lang === "cpp") return ".cpp"
}
