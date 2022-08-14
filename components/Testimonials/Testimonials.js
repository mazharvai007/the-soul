import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Testimonials.module.scss';
import 'slick-carousel/slick/slick.css';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const testimonialSliderItem = [
	{
		id: 1,
		icon: (
			<FormatQuoteRoundedIcon
				className={styles.testiIcon}
				sx={{
					color: lightTheme.palette.text.white,
					fontSize: '45px',
					marginBottom: '1.5rem',
				}}
			/>
		),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image: '../images/testimonial/client-1.png',
		name: 'Jesica Gomez',
		position: 'CEO, Founder',
	},
	{
		id: 2,
		icon: (
			<FormatQuoteRoundedIcon
				className={styles.testiIcon}
				sx={{
					color: lightTheme.palette.text.white,
					fontSize: '45px',
					marginBottom: '1.5rem',
				}}
			/>
		),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image: '../images/testimonial/client-1.png',
		name: 'Jesica Gomez',
		position: 'CEO, Founder',
	},
	{
		id: 3,
		icon: (
			<FormatQuoteRoundedIcon
				className={styles.testiIcon}
				sx={{
					color: lightTheme.palette.text.white,
					fontSize: '45px',
					marginBottom: '1.5rem',
				}}
			/>
		),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image: '../images/testimonial/client-1.png',
		name: 'Jesica Gomez',
		position: 'CEO, Founder',
	},
];

const testimonialBgShapes = [
	{
		id: 1,
		image: 'images/backgrounds/map.png',
	},
	{
		id: 2,
		image: 'images/illustrations/dots-group-v.png',
	},
	{
		id: 3,
		image: 'images/illustrations/leaf-orange.png',
	},
	{
		id: 4,
		image: 'images/illustrations/dots-group-sm.png',
	},
	{
		id: 5,
		image: 'images/illustrations/leaf-pink-round.png',
	},
	{
		id: 6,
		image: 'images/illustrations/leaf-cyan.png',
	},
];

function Testimonials() {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		speed: 1000,
		adaptiveHeight: true,
		dotsClass: `${styles.testiDots}`,
		arrows: false,
	};

	return (
		<>
			<Box
				container
				className={styles.wrapper}
				sx={{ backgroundColor: lightTheme.palette.primary.main }}>
				<Container>
					<Grid className={styles.titleWrap}>
						<Grid item>
							<Typography
								component='h2'
								variant='h2'
								align='center'
								fontWeight='700'
								color={lightTheme.palette.text.white}>
								Testimonials
							</Typography>
						</Grid>
					</Grid>
					<Grid sx={{ flexGrow: 1 }}>
						<Slider
							{...settings}
							className={styles.sliderContainer}>
							{testimonialSliderItem.map((item) => (
								<div className={styles.item} key={item.id}>
									{item.icon}
									<Typography
										variant='body2'
										component='p'
										className={styles.testiDes}
										marginBottom='1.5rem'
										sx={{
											color: lightTheme.palette.text
												.white,
										}}>
										{item.description}
									</Typography>
									<img
										className={styles.testiMedia}
										src={item.image}
										alt={item.name}
									/>
									<Typography
										component='h4'
										variant='h4'
										fontWeight='700'
										marginBottom='0.5rem'
										sx={{
											color: lightTheme.palette.text
												.white,
										}}>
										{item.name}
									</Typography>
									<Typography
										component='h6'
										variant='h6'
										fontWeight='700'
										sx={{
											color: lightTheme.palette.text
												.light,
										}}>
										{item.position}
									</Typography>
								</div>
							))}
						</Slider>
					</Grid>
				</Container>
				{testimonialBgShapes.map((bgShape) => (
					<img
						className={styles.bgShapes}
						key={bgShape.id}
						src={bgShape.image}
						id={`bgShape${bgShape.id}`}
					/>
				))}
			</Box>
		</>
	);
}

export default Testimonials;
