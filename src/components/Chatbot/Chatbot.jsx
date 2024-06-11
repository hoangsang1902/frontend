import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const onSendButton = () => {
    if (inputText.trim() === "") return;

    const userMessage = { name: "User", message: inputText };
    setMessages((prevMessages) => [userMessage, ...prevMessages]); // Sử dụng callback để cập nhật state
    setInputText("");

    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: JSON.stringify({ message: inputText }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const botMessage = { name: "Sang", message: data.answer };
        setMessages((prevMessages) => [botMessage, ...prevMessages]);
      })
      .catch((error) => console.error("Error:", error));
  };

  const onClickChatbotButton = () => {
    const chatbox = document.querySelector(".chatbox__support");
    chatbox.classList.toggle("chatbox--active");
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/nolan/64/chatbot.png"
                alt="image"
              />
            </div>
            <div className="chatbox__content--header">
              <h2 className="chatbox__heading--header">CHATBOT</h2>
              <p className="chatbox__description--header">
                Hi. How can I help you?
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`messages__item ${
                  msg.name === "Sang"
                    ? "messages__item--visitor"
                    : "messages__item--operator"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") onSendButton();
              }}
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={onSendButton}
            >
              Send
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={onClickChatbotButton}>
            <img
              width="36"
              height="36"
              src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/weixing.png"
              alt="Chat"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
