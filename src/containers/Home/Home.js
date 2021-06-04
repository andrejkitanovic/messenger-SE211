import React from 'react';

import './Home.scss';

import User from '../../components/User/User';

const Home = (props) => {
	return (
		<div className="home">
			<div className="home__main box-main">
				<div className="home__list">
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
					<User user="andrej213" />
				</div>

				<div className="home__chat"></div>
			</div>
		</div>
	);
};

export default Home;
