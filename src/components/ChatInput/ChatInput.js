import React from 'react'

import './ChatInput.scss'

const ChatInput = (props) => {
    return (<div className="chat-input">
        <input className="chat-input__input" type="text"/>
        <button className="chat-input__button" type="submit">Posalji</button>
    </div>)
}

export default ChatInput