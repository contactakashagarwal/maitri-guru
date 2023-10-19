import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const HomePage = (props) => {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([{ message: 'Hello !', isUser: false }]);

    useEffect(() => {
        const chatMessagesDiv = document.querySelector('.chat-messages');
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
    }, [chatMessages.length]);

    const addMessage = (message, isUser) => {
        message = message ? message : 'Can you please rephrase your query !';
        setChatMessages((prevState) => {
            return [...prevState, { message, isUser }];
        });
    };

    const processMessage = (message) => {
        return fetch('http://localhost:3002/bot', {
            method: 'POST',
            body: JSON.stringify({
                message,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.text());
    };

    const sendMessage = () => {
        addMessage(userInput, true);

        processMessage(userInput).then((response) => {
            console.log(response);
            addMessage(response, false);
        });

        setUserInput('');
    };

    return (
        <div>
            <h1>मैत्री गुरु (Your psychological friend)</h1>

            <div className='chat-widget'>
                <div className='chat-messages'>
                    {chatMessages.map((message) => (
                        <div key={uuid()} className={message.isUser ? 'user-message' : 'bot-message'}>
                            <span>{message.message}</span>
                        </div>
                    ))}
                </div>
                <input
                    type='text'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className='chat-input'
                    id='userInput'
                    placeholder='Type a message...'
                />
                <div className='button-wrapper'>
                    <button className='chat-button' onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
