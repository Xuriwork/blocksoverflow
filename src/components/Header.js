import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '../assets/icons/search-line.svg';
import InboxIcon from '../assets/icons/inbox-fill.svg';
import HelpIcon from '../assets/icons/question-fill.svg';
import ProfileCardIcon from '../assets/icons/profile-fill.svg';
import TrophyIcon from '../assets/icons/trophy-fill.svg';
import BlocksoverflowLogo from '../assets/Blocksoverflow-Logo.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-items-container'>
				<Link to='/'>
					<div className='logo-container'>
						<img src={BlocksoverflowLogo} alt='logo' />
						<h2>Blocksoverflow</h2>
					</div>
				</Link>
				<div className='search-input-container'>
					<img src={SearchIcon} alt='search' />
					<input type='text' placeholder='Search' className='search-input' />
				</div>
				<div className='header-items-right'>
					<img src={ProfileCardIcon} alt='profile card' />
					<img src={TrophyIcon} alt='trophy' />
					<img src={InboxIcon} alt='inbox' />
					<img src={HelpIcon} alt='help' />
				</div>
			</div>
		</header>
	);
};

export default Header;
