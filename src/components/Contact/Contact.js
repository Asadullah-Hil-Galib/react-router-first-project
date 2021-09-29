import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [text, setText] = useState ([])
    const onchangeMessage = (event) => {
        setText(event.target.value)
    }
    return (
        <div>
            <div className="name-phone">
                <input type="text" placeholder="Inpur your name" />
                <input type="text" placeholder="Input your phone" />
            </div>
            <div className="full-form">
                <input type="email" placeholder="Input your email" />
                <input type="password" placeholder="input your password" />
                <textarea resize value={text} name="" id="" onChange={onchangeMessage}></textarea>
            </div>
            <div className="buttons">
                <button className="send-button">Send</button>
                <p>{ text.length}</p>
            </div>
        </div>
    );
};

export default Contact;