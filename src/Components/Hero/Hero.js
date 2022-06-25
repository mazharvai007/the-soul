import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';
import './Hero.css';

const ImageLayer = styled.div({
	position: 'absolute',
	bottom: 0,
	left: 0,
});

const SingleImage = styled.div({
	position: 'absolute',
	zIndex: 1,
});

const imageItemList = [
	{
		id: 1,
		img: 'images/illustrations/dots-cyan.png',
		name: 'The Soul',
	},
	{
		id: 2,
		img: 'images/illustrations/leaf-orange.png',
		name: 'The Soul',
	},
	{
		id: 3,
		img: 'images/illustrations/dots-orange.png',
		name: 'The Soul',
	},
	{
		id: 4,
		img: 'images/illustrations/leaf-yellow.png',
		name: 'The Soul',
	},
	{
		id: 5,
		img: 'images/illustrations/leaf-cyan.png',
		name: 'The Soul',
	},
	{
		id: 6,
		img: 'images/illustrations/dots-group-orange.png',
		name: 'The Soul',
	},
	{
		id: 7,
		img: 'images/illustrations/leaf-pink-round.png',
		name: 'The Soul',
	},
	{
		id: 8,
		img: 'images/illustrations/leaf-cyan-2.png',
		name: 'The Soul',
	},
];

function Hero() {
	return (
		<>
			<Box
				id='parallax'
				sx={{
					position: 'relative',
					padding: '300px 0 200px',
					backgroundColor: 'primary.main',
					// overflow: 'hidden',
				}}>
				<Container>
					<Box>
						<Typography
							variant='h1'
							component='h1'
							fontWeight={700}
							color={theme.palette.textColor.white}
							sx={{
								whiteSpace: 'pre-line',
								position: 'relative',
								zIndex: 2,
							}}>
							{`Hi! I'am \n Charlotte \n UX designer`}
						</Typography>
					</Box>
				</Container>
				<ImageLayer>
					<img
						src='images/illustrations/leaf-bg.png'
						alt='the soul'
					/>
				</ImageLayer>
				{imageItemList.map((item) => (
					<SingleImage
						key={item.img}
						className='layer'
						id={`layer${item.id}`}>
						<img src={item.img} alt={item.title} />
					</SingleImage>
				))}
			</Box>
		</>
	);
}

export default Hero;
