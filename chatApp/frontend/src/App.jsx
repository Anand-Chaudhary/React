import { useEffect, useState } from "react"
import './App.css'
import io from "socket.io-client";
import Chats from "./components/Chats";

const socket = io.connect('http://localhost:3000');

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false)
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(data);
    }) //eslint-disabled-next-line
  }, [socket])

  return (
    <>
      {!showChat ? (
        <div className="join-chat-container">
          <h3>Join a Chat: </h3>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)} />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Chats socket={socket} user={username} room={room} />
      )}
    </>
  )
}

export default App
