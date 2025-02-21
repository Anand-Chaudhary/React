import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './Chats.css';

function Chats({ socket, user, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage.trim() !== "") {
            const messageData = {
                room,
                author: user,
                message: currentMessage,
                time: new Date().toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                }),
            };
            await socket.emit("sendMessage", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        const handleMessage = (data) => {
            console.log("Received message:", data);
            setMessageList((list) => [...list, data]);
        };

        socket.on("receiveMessage", handleMessage);
        return () => socket.off("receiveMessage", handleMessage);
    }, [socket]);

    return (
        <div className="chat-wrapper">
            <div className="chatHeader">
                <p>Live Chat - Room: {room}</p>
            </div>
            <div className="chatBody">
                {messageList.map((messageContent, index) => (
                    <div 
                        key={index} 
                        className={`message ${messageContent.author === user ? "sent" : "received"}`}
                    >
                        <div className="message-content">
                            <div className="message-text">{messageContent.message}</div>
                            <div className="message-meta">
                                <span>{messageContent.author}</span>
                                <span>{messageContent.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chatFooter">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Type your message..."
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

Chats.propTypes = {
    socket: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
};

export default Chats;
