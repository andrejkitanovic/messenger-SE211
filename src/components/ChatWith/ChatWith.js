import React from 'react';

import './ChatWith.scss';

const ChatWith = ({ label }) => {
	return <div className="chat-with">{label}</div>;
};

export default React.memo(ChatWith);
