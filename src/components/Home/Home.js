import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import queryString from 'query-string';

const Home = () => {
	const [activeTab, setActiveTab] = useState('interesting');

	const activeTabClass = (thisTab) => {
		const active = (activeTab === thisTab ? 'active' : '');
		return active;
	};

	return (
		<div className='home-component'>
			<div className='heading'>
				<div className='heading-top'>
					<h1>Top Questions</h1>
					<Link to='/ask-question'>Ask Question</Link>
				</div>
				<div className='heading-bottom'>
					<Link
						className={activeTabClass('interesting')}
						to='/?tab=interesting'
						onClick={() => setActiveTab('interesting')}
					>
						Interesting
					</Link>
					<Link
						className={activeTabClass('rewarding')}
						to='/?tab=rewarding'
						onClick={() => setActiveTab('rewarding')}
					>
						Rewarding
					</Link>
					<Link
						className={activeTabClass('hot')}
						to='/?tab=hot'
						onClick={() => setActiveTab('hot')}
					>
						Hot
					</Link>
					<Link
						className={activeTabClass('week')}
						to='/?tab=week'
						onClick={() => setActiveTab('week')}
					>
						Week
					</Link>
					<Link
						className={activeTabClass('month')}
						to='/?tab=month'
						onClick={() => setActiveTab('month')}
					>
						Month
					</Link>
				</div>
			</div>
			<div className='questions-container'>
				<div className='question-container'>
					<div>
						<h3>Solidity and React.js Library Bug</h3>
						<div className='question-tags'>
							<Link to='#'>Solidity</Link>
							<Link to='#'>Ethereum</Link>
							<Link to='#'>React.js</Link>
						</div>
						<div className='question-status'>
							<Link to='#'>asked 2 mins ago</Link> <Link className='question-author' to='#'>Ivan</Link>{' '}
							<span>1</span>
						</div>
					</div>
					<div className='question-stats'>
						<div>
							<span>3</span>
							<span>votes</span>
						</div>
						<div>
							<span>4</span>
							<span>answers</span>
						</div>
						<div>
							<span>10</span>
							<span>views</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
