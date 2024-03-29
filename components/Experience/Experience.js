import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Experience.module.scss';

const experienceList = [
	{
		id: 1,
		image: 'images/experience/icon-1.png',
		date: 'Jan 2007 - Feb 2009',
		title: 'Junior UX Designer',
		company: 'Google',
	},
	{
		id: 2,
		image: 'images/experience/icon-2.png',
		date: 'Mar 2009 - Aug 2014',
		title: 'UX & UI Designer',
		company: 'Funden',
	},
	{
		id: 3,
		image: 'images/experience/icon-3.png',
		date: 'Sep 2014 - Present',
		title: 'Senior UI Designer',
		company: 'StellarFi',
	},
];

function Experience() {
	return (
		<>
			<Box
				container
				className={styles.wrapper}
				bgcolor={lightTheme.palette.bodyColor}>
				<Container>
					<Grid className={styles.titleWrap}>
						<Grid item>
							<Typography
								variant='h2'
								component='h2'
								align='center'
								fontWeight='bold'
								color={lightTheme.palette.text.dark}>
								Experience
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						{experienceList.map((experience) => (
							<Grid
								item
								md={4}
								key={experience.id}
								sx={{ flexGrow: 1 }}>
								<Card className={styles.card}>
									<CardMedia
										component='img'
										alt={experience.title}
										image={experience.image}
										className={
											styles.cardMedia
										}></CardMedia>
									<CardContent>
										<Typography
											component='p'
											variant='body2'
											color={
												lightTheme.palette.text.main
											}>
											{experience.date}
										</Typography>
										<Typography
											component='h4'
											variant='h4'
											fontWeight='500'
											marginBottom='.5rem'
											color={
												lightTheme.palette.text.dark
											}>
											{experience.title}
										</Typography>
										<Typography
											component='h6'
											variant='h5'
											fontWeight='400'
											color={
												lightTheme.palette.text.light
											}>
											{experience.company}
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

export default Experience;
