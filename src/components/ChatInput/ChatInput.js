import React from 'react';

import './ChatInput.scss';
import { formValuesToObject, clearEnteredValues, objectIntoFormData } from '../../helpers';

const ChatInput = ({ sendMessage }) => {
	const sendMessageHandler = (e) => {
		e.preventDefault();
		let object = formValuesToObject(e.target.elements);
		clearEnteredValues(e.target.elements);

		const data = objectIntoFormData(object);

		sendMessage(data);
	};

	return (
		<form className="chat-input" onSubmit={sendMessageHandler}>
			<input className="chat-input__input" name="message" required type="text" />
			<input
				className="chat-input__file"
				name="file"
				type="file"
			/>
			<button className="chat-input__button" type="submit">
				Posalji
			</button>
		</form>
	);
};

export default ChatInput;
