import {useState} from "react"
import './App.css'
import io from "socket.io-client";

const socket = io.connect('http://localhost:5173');

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = ()=>{
    if(username !== "" && room !== ""){
      socket.emit("join_room", room)
    }
  }

  return(
    <>
      <h3>Join a Chat: </h3>
      <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder="Room ID" onChange={(e)=>setRoom(e.target.value)} />
      <button onClick={joinRoom}>Join Room</button>
    </>
  )
}

export default App
