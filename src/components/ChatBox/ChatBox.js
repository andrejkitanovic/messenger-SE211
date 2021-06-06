import React from 'react';

import './ChatBox.scss';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const ChatBox = () => {
	const { messages, user } = useSelector((state) => state.message);

	if(document.getElementById('chat')){
		document.getElementById('chat').scrollTo(0,document.getElementById('chat').innerHeight)
	}
	

	return (
		<div className="chat-box" id="chat">
			<div className="chat-box__container">
				{messages &&
					messages.map((data, index) => (
						<div
							className={`chat-box__message chat-box__message-${user === data.from ? 'recieved' : 'sended'}`}
							key={index}
						>
							<div className={`chat-box__message-container `}>
								<p>{data.message}</p>
							</div>

							<p className="chat-box__time">{dayjs(new Date(data.createdAt)).format('HH:mm')}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default ChatBox;
