import React, { useState } from 'react';
import Link from 'next/link';
import {
	AppBar,
	Box,
	List,
	ListItem,
	SwipeableDrawer,
	Toolbar,
} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styled from '@emotion/styled';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Header.module.scss';

const pages = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Blog', link: '/blog' },
	{ name: 'Portfolio', link: '/portfolio' },
	{ name: 'Contact', link: '/contact' },
];

function Header() {
	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (item, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [item]: open });
	};

	const menuList = (item) => (
		<Box
			sx={{ width: '250px', maxWidth: '100%', paddingTop: '50px' }}
			onClick={toggleDrawer(item, false)}
			onKeyDown={toggleDrawer(item, false)}>
			<List>
				{pages.map((page, index) => (
					<ListItem key={index} sx={{ justifyContent: 'center' }}>
						<Link
							href={page.link}
							underline='none'
							style={{
								fontFamily:
									lightTheme.typography.menu.fontFamily,
								color: lightTheme.palette.text.primary,
								textDecoration: 'none',
								textTransform: 'uppercase',
								fontSize: '16px',
								fontWeight: '700',
								transition: '0.2s ease',
							}}>
							{page.name}
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const Logo = styled.a({
		img: { width: '100px' },
	});

	const Link = styled.a({
		color: lightTheme.palette.text.white,
	});

	// const ElevationScroll = (props) => {
	// 	const { children, window } = props;
	// 	const trigger = useScrollTrigger({
	// 		disableHysteresis: true,
	// 		threshold: 0,
	// 		target: window ? window() : undefined,
	// 	});

	// 	if (trigger === true) {
	// 		document
	// 			.querySelector('header.MuiAppBar-root')
	// 			.classList.add('mainNav');
	// 	}
	// 	return React.cloneElement(children, {
	// 		elevation: trigger ? 4 : 0,
	// 	});
	// };

	return (
		<>
			{/* <ElevationScroll> */}
			<AppBar
				className={styles.wrapper}
				sx={{
					[lightTheme.breakpoints.only('xs')]: {
						padding: '20px !important',
					},
					position: {
						xs: 'relative',
						sm: 'fixed',
					},
					'&.mainNav': {
						padding: '15px 100px',
						zIndex: 1100,
					},
				}}>
				<Toolbar disableGutters className={styles.toolbar}>
					<Logo variant='h6' component='a' href='/'>
						<img src='images/logo.png' alt='the soul' />
					</Logo>
					{['left'].map((item, index) => (
						<Box
							key={index}
							sx={{
								display: { xs: 'flex', md: 'none' },
							}}>
							<MenuSharpIcon
								size='large'
								color='inherit'
								onClick={toggleDrawer(item, true)}>
								<MenuIcon />
							</MenuSharpIcon>
							<SwipeableDrawer
								anchor={item}
								open={state[item]}
								onClose={toggleDrawer(item, false)}
								onOpen={toggleDrawer(item, true)}>
								{menuList(item)}
							</SwipeableDrawer>
						</Box>
					))}
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<ul className={styles.mainMenu}>
							{pages.map((page, index) => (
								<li key={index}>
									<Link
										style={lightTheme.typography.menu}
										href={page.link}
										className={styles.menuItemLink}>
										{page.name}
									</Link>
								</li>
							))}
						</ul>
					</Box>
				</Toolbar>
			</AppBar>
			{/* </ElevationScroll> */}
		</>
	);
}

export default Header;
