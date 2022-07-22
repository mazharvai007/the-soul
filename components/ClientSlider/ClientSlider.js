import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/ClientSlider.module.scss';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

const sliderItems = [
	{
		id: 1,
		image: 'images/clients-logo/client-logo-1.png',
	},
	{
		id: 2,
		image: 'images/clients-logo/client-logo-2.png',
	},
	{
		id: 3,
		image: 'images/clients-logo/client-logo-3.png',
	},
	{
		id: 4,
		image: 'images/clients-logo/client-logo-4.png',
	},
	{
		id: 5,
		image: 'images/clients-logo/client-logo-5.png',
	},
	{
		id: 6,
		image: 'images/clients-logo/client-logo-1.png',
	},
	{
		id: 7,
		image: 'images/clients-logo/client-logo-2.png',
	},
	{
		id: 8,
		image: 'images/clients-logo/client-logo-3.png',
	},
	{
		id: 9,
		image: 'images/clients-logo/client-logo-4.png',
	},
	{
		id: 10,
		image: 'images/clients-logo/client-logo-5.png',
	},
];

function ClientSlider() {
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Box container className={styles.wrapper}>
				<Container>
					<Slider {...settings} className={styles.sliderContainer}>
						{sliderItems.map((item) => (
							<div className={styles.item} key={item.id}>
								<img
									className={styles.testiMedia}
									src={item.image}
									alt='the soul'
								/>
							</div>
						))}
					</Slider>
				</Container>
			</Box>
		</>
	);
}

export default ClientSlider;
