import { useState, useRef } from 'react'
import Editor from "@monaco-editor/react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"
import Tab from './Tab'

const CodeEditor = () => {
    
    const handleOnMount = (editor:any) => {

    }

    return (
        <div className='flex flex-col h-full'>
            <Tab />
            <Editor 
                className='grow'
                theme="vs-dark"
                onMount={handleOnMount}
                options={{
                    automaticLayout: true,
                    minimap: {enabled:false}
                }}
            />
        </div>
    )
}

export default CodeEditor