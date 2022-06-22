import React, { useState } from 'react';
import {
	AppBar,
	Box,
	IconButton,
	Link,
	List,
	ListItem,
	MenuItem,
	SwipeableDrawer,
	Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const pages = ['Home', 'About', 'Blog', 'Portfolio', 'Contact'];

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
			sx={{ width: '280px', maxWidth: '100%' }}
			onClick={toggleDrawer(item, false)}
			onKeyDown={toggleDrawer(item, false)}>
			<List>
				{pages.map((page) => (
					<ListItem key={page}>
						<Link
							href='#'
							underline='none'
							variant='h6'
							sx={{
								textTransform: 'uppercase',
								fontSize: '15px',
								fontWeight: '700',
								transition: '0.2s ease',
								':hover': {
									color: 'rgba(255,255,255,.5)',
								},
							}}>
							{page}
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const MenuList = styled.ul({
		display: 'flex',
	});

	const Logo = styled.a({
		img: { width: '100px' },
	});

	const ElevationScroll = (props) => {
		const { children, window } = props;
		const trigger = useScrollTrigger({
			// disableHysteresis: true,
			// threshold: 0,
			target: window ? window() : undefined,
		});
		console.log(trigger);
		if (trigger === true) {
			document
				.querySelector('header.MuiAppBar-root')
				.classList.add('mainNav');
		}
		return React.cloneElement(children, {
			elevation: trigger ? 4 : 0,
		});
	};

	return (
		<>
			<ElevationScroll>
				<AppBar
					position='fixed'
					sx={{
						boxShadow: 'none',
						paddingTop: '40px',
						paddingBottom: '40px',
						paddingLeft: '130px',
						paddingRight: '130px',
						transition: '.3s ease',
						'&.mainNav': {
							padding: '15px 100px',
						},
					}}>
					<Toolbar
						disableGutters
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
						<Logo variant='h6' component='a' href='/'>
							<img src='images/logo.png' alt='the soul' />
						</Logo>
						{['left'].map((item) => (
							<Box
								key={item}
								sx={{
									display: { xs: 'flex', md: 'none' },
								}}>
								<IconButton
									size='large'
									color='inherit'
									onClick={toggleDrawer(item, true)}>
									<MenuIcon />
								</IconButton>
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
							<MenuList>
								{pages.map((page) => (
									<MenuItem key={page}>
										<Link
											href='#'
											color={
												theme.palette.textColor.white
											}
											underline='none'>
											{page}
										</Link>
									</MenuItem>
								))}
							</MenuList>
						</Box>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</>
	);
}

export default Header;
