import { useRef } from 'react'
import Editor from "@monaco-editor/react"
import Tab from './Tab'
import * as Y from "yjs"
import { MonacoBinding } from "y-monaco"
import { WebsocketProvider } from "y-websocket"
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { updateUserCode } from '../../../store/codeSlice'
import setCursors from './setCursors'



const CodeEditor = () => {
    const dispatch = useAppDispatch()
    const editorRef = useRef<any>(null);
    const activeLanguage = useAppSelector(state => state.codeContext.activeCodingLanguage)
    const roomName = useAppSelector(state => state.appScreen.roomName)

    const handleOnMount = (editor:any) => {
        editorRef.current = editor;

        const doc = new Y.Doc();
        const provider = new WebsocketProvider(
            // "wss://demos.yjs.dev",
            'ws://localhost:1234',
            roomName,
            doc
        );
        const type = doc.getText("monaco");

        const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
        setCursors(doc.clientID, provider)

        editor.onDidChangeModelContent(() => {
            const value = editor.getValue();
            console.log(value);
            dispatch(updateUserCode(value))
        });
    }

    return (
        <div className='flex flex-col h-full'>
            <Tab />
            <Editor 
                className='grow'
                theme="vs-dark"
                onMount={handleOnMount}
                language={activeLanguage}
                options={{
                    automaticLayout: true,
                    minimap: {enabled:false}
                }}
            />
        </div>
    )
}

export default CodeEditor