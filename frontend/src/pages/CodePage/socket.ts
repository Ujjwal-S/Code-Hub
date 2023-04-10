import {io} from "socket.io-client"

const URL = "http://localhost:3000/"

const options = {
    reconnectionAttempt: 'Infinity',
    timeout: 30000,
    autoConnect: false,
    transports: ['websocket'],
}

export const socket = io(URL, options);

// export const initSocket = async () => {
    // const options = {
    //     reconnectionAttempt: 'Infinity',
    //     timeout: 30000,
    //     transports: ['websocket'],
    // }

//     return io("http://localhost:3000/", options)
// }