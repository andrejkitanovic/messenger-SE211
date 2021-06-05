import React from 'react';

import './ChatInput.scss';
import { formValuesToObject, clearEnteredValues } from '../../helpers';

const ChatInput = ({ sendMessage }) => {
	const sendMessageHandler = (e) => {
		e.preventDefault();
		let { message } = formValuesToObject(e.target.elements);
		clearEnteredValues(e.target.elements);

		message && sendMessage(message);
	};

	return (
		<form className="chat-input" onSubmit={sendMessageHandler}>
			<input className="chat-input__input" name="message" required type="text" />
			<button className="chat-input__button" type="submit">
				Posalji
			</button>
		</form>
	);
};

export default ChatInput;
