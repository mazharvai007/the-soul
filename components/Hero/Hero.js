import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Hero.module.scss';

const ImageLayer = styled.div({
	position: 'absolute',
	bottom: 0,
	left: 0,
});

const SingleImage = styled.div({
	position: 'absolute',
	zIndex: 1,
});

const SocialIconList = styled.div({
	position: 'relative',
	display: 'flex',
	flexFlow: 'column wrap',
	gap: '10px',
	marginLeft: '48px',
	marginTop: '15px',
	'.MuiTypography-root': {
		width: 'fit-content',
	},
	'.MuiSvgIcon-root > path': {
		fill: '#fff',
	},
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
				className={styles.wrapper}
				sx={{
					position: 'relative',
					padding: '300px 0 200px',
					backgroundColor: 'primary.main',
				}}>
				<Container>
					<Box
						sx={{
							maxWidth: '90%',
							margin: 'auto',
							paddingLeft: '15px',
							paddingRight: '15px',
						}}>
						<Typography
							variant='h1'
							component='h1'
							fontWeight={700}
							color={lightTheme.palette.text.white}
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
						key={item.id}
						className={styles.objectItem}
						id={`layer${item.id}`}>
						<img src={item.img} alt='The Soul' />
					</SingleImage>
				))}

				<SocialIconList>
					<Typography component='a' href='#'>
						<FacebookIcon fontSize='small' />
					</Typography>
					<Typography component='a' href='#'>
						<TwitterIcon fontSize='small' />
					</Typography>
					<Typography component='a' href='#'>
						<InstagramIcon fontSize='small' />
					</Typography>
					<Typography component='a' href='#'>
						<YouTubeIcon fontSize='small' />
					</Typography>
				</SocialIconList>
			</Box>
		</>
	);
}

export default Hero;
