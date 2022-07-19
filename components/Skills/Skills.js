import React, { useEffect } from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Skills.module.scss';

const skillsData = [
	{
		id: 1,
		color: '#fdb157',
		progress: '90%',
		title: 'Web Design (90%)',
	},
	{
		id: 2,
		color: '#9473e6',
		progress: '60%',
		title: 'Logo Design (60%)',
	},
	{
		id: 3,
		color: '#bdecf6',
		progress: '80%',
		title: 'After Effects (80%)',
	},
	{
		id: 4,
		color: '#ffbcaa',
		progress: '70%',
		title: 'Web App (70%)',
	},
];

function Skills() {
	useEffect(() => {
		const getDataColor = document.querySelectorAll('.progressWrapper');
		getDataColor.forEach((item) => {
			const colorSelector = item.getAttribute('datacolor');
			item.style.backgroundColor = colorSelector;
		});

		const getDataProgress = document.querySelectorAll('.wave');
		getDataProgress.forEach((item) => {
			const progressSelector = item.getAttribute('dataprogressbar');
			item.style.bottom = progressSelector;
		});
	});
	return (
		<>
			<Box container className={styles.Wrapper}>
				<Container>
					<Grid className={styles.titleWrap}>
						<Grid item>
							<Typography
								component='h2'
								variant='h2'
								align='center'
								fontWeight='700'
								color={lightTheme.palette.text.dark}>
								Skills
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={3} sx={{ flexGrow: 1 }}>
						{skillsData.map((skill) => (
							<Grid item md={3} key={skill.id}>
								<Card
									className={styles.card}
									sx={{
										backgroundColor:
											lightTheme.palette.bodyColor,
									}}>
									<CardMedia
										className={styles.cardMedia}
										datacolor={skill.color}>
										<Typography
											component='div'
											className={styles.cardMediaProgress}
											dataprogressbar={
												skill.progress
											}></Typography>
									</CardMedia>
									<CardContent>
										<Typography
											component='h4'
											variant='h4'
											fontWeight='bold'
											color={
												lightTheme.palette.text.dark
											}>
											{skill.title}
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

export default Skills;
