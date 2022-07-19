import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Services.module.scss';
import { Box } from '@mui/system';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';

const servicesList = [
	{
		id: 1,
		icon: (
			<PaletteOutlinedIcon
				className={styles.cartIcon}
				sx={{ fontSize: 45 }}
			/>
		),
		title: 'UI Design',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		bgColor: lightTheme.palette.bodyColor.main,
	},
	{
		id: 2,
		icon: (
			<PolylineOutlinedIcon
				className={styles.cartIcon}
				sx={{ fontSize: 45 }}
			/>
		),
		title: 'UX Design',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		bgColor: lightTheme.palette.primary.main,
	},
	{
		id: 3,
		icon: (
			<InterestsOutlinedIcon
				className={styles.cartIcon}
				sx={{ fontSize: 45 }}
			/>
		),
		title: 'Interaction Design',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		bgColor: lightTheme.palette.bodyColor.main,
	},
];

function Services() {
	return (
		<>
			<Box className={styles.wrapper}>
				<Container>
					<Grid className={styles.titleWrap}>
						<Grid item>
							<Typography
								variant='h2'
								component='h2'
								align='center'
								fontWeight='bold'
								color={lightTheme.palette.text.dark}>
								Services
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						{servicesList.map((service) => (
							<Grid
								item
								md={4}
								key={service.id}
								sx={{ flexGrow: 1 }}>
								<Card
									className={`${styles.card} ${
										service.id == 2 ? 'active' : ''
									}`}
									sx={{ bgcolor: `${service.bgColor}` }}>
									{service.icon}
									<CardContent className={styles.cardContent}>
										<Typography
											component='h4'
											variant='h4'
											fontWeight='700'
											marginBottom='1.5rem'
											color={
												lightTheme.palette.text.dark
											}>
											{service.title}
										</Typography>
										<Typography
											className={styles.cardDescription}
											component='p'
											variant='body2'
											fontWeight='400'
											color={
												lightTheme.palette.text.light
											}>
											{service.description}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
}

export default Services;
