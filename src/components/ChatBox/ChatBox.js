import React from 'react';

import './ChatBox.scss';

const ChatBox = (props) => {
	return (
		<div className="chat-box">
			<div className="chat-box__message chat-box__message-sended">
				<p>Hello!</p>
			</div>

			<div className="chat-box__message chat-box__message-recieved">
				<p>Hello you too!</p>
			</div>

			<div className="chat-box__message chat-box__message-sended">
				<p>How are you!</p>
			</div>

			<div className="chat-box__message chat-box__message-recieved">
				<p>Great thanks for asking!</p>
			</div>

			<div className="chat-box__message chat-box__message-sended">
				<p>Check this out</p>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1XVNZSUe_WmtLFNzsltXOk-QMu7uaiiWTg&usqp=CAU" alt="Message" />
			</div>
		</div>
	);
};

export default ChatBox;
