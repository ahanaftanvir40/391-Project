import { useState, useEffect, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function OwnerChatComponent({ vehicleId, ownerId }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/ownerChats/${vehicleId}/${ownerId}`)
      .then((response) => {
        setUserIds(response.data.userIds);
        setUserNames(response.data.userNames);
      });

    socket.emit("join", { vehicleId, ownerId });

    socket.on("newUser", ({ userId }) => {
      setUserIds((prevUserIds) => [...prevUserIds, userId]);
    });

    return () => {
      socket.off("newUser");
    };
  }, [vehicleId, ownerId]);

  useEffect(() => {
    if (currentUserId) {
      const room = `${vehicleId}-${ownerId}-${currentUserId}`;
      socket.emit("join", { vehicleId, ownerId, userId: currentUserId });

      axios
        .get(
          `http://localhost:3000/api/chat/${vehicleId}/${ownerId}/${currentUserId}`
        )
        .then((response) => {
          setMessages(response.data);
        });

      socket.on("message", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
        socket.off("message");
      };
    }
  }, [vehicleId, ownerId, currentUserId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message && currentUserId) {
      socket.emit("message", {
        vehicleId,
        ownerId,
        userId: currentUserId,
        message,
        senderId: ownerId,
      });
      setMessage("");
    }
  };

  return (
    <div>
      <button
        className="btn bg-slate-800 border-none text-white hover:bg-slate-900"
        onClick={() => document.getElementById("owner_chat_modal").showModal()}
      >
        Owner Chat
      </button>
      <dialog id="owner_chat_modal" className="modal">
        <div className="modal-box w-fit h-fit dark:bg-zinc-700">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="w-full h-full mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center text-white dark:text-white/80">
              Owner Chat
            </h1>
            <div className="user-list mb-4">
              <h2 className="text-xl font-semibold mb-2 text-white dark:text-white/80">
                Users
              </h2>
              {userIds.map((userId, index) => (
                <div key={index} className="flex items-center mb-2">
                  <p className="mr-2 dark:text-white/80 text-white">
                    {userNames[index]}
                  </p>
                  <button
                    className="py-1 px-2 bg-blue-600 text-white rounded"
                    onClick={() => setCurrentUserId(userId)}
                  >
                    Chat
                  </button>
                </div>
              ))}
            </div>
            {currentUserId && (
              <div className="chat-box bg-white p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2 dark:text-white/80">
                  Chatting with {userNames[userIds.indexOf(currentUserId)]}
                </h2>
                <div
                  ref={chatContainerRef}
                  className="chat-messages overflow-hidden flex flex-col space-y-4 overflow-y-auto max-h-72 p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg bg-gray-50 dark:bg-zinc-700"
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`chat-message p-3 rounded-lg ${
                        msg.senderId === ownerId
                          ? "bg-teal-100 self-end"
                          : "bg-gray-200 self-start"
                      }`}
                    >
                      <div className="text-sm font-semibold text-gray-600 dark:text-white/80">
                        {msg.senderId === ownerId
                          ? "You"
                          : userNames[userIds.indexOf(currentUserId)]}
                      </div>
                      <div className="text-black dark:text-white/80">
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={sendMessage} className="mt-4 flex">
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-3 border text-white border-gray-300 rounded-l-lg focus:outline-none focus:border-teal-500"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default OwnerChatComponent;
