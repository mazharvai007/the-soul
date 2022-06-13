import React from 'react';

import './Header.scss';
const pages = ['Home', 'About', 'Blog', 'Portfolio', 'Contact'];

function Header() {
	return (
		<>
			<h1>Header</h1>
			{pages.map((page) => (
				<p key={page}>{page}</p>
			))}
		</>
	);
}

export default Header;
