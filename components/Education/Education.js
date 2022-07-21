import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Education.module.scss';
import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const educationList = [
	{
		id: 1,
		icon: (
			<WorkspacePremiumOutlinedIcon
				className={styles.cardIcon}
				sx={{
					fontSize: 45,
					backgroundColor: lightTheme.palette.bodyColor.main,
					color: lightTheme.palette.iconColor.main,
				}}
			/>
		),
		year: 2006,
		title: 'Marters in UX Design',
		institute: 'Masassusets Institute of Technology',
	},
	{
		id: 2,
		icon: (
			<WorkspacePremiumOutlinedIcon
				className={styles.cardIcon}
				sx={{
					fontSize: 45,
					backgroundColor: lightTheme.palette.bodyColor.main,
					color: lightTheme.palette.iconColor.main,
				}}
			/>
		),
		year: 2004,
		title: 'Honours in Fine Arts',
		institute: 'Harvard University',
	},
	{
		id: 3,
		icon: (
			<WorkspacePremiumOutlinedIcon
				className={styles.cardIcon}
				sx={{
					fontSize: 45,
					backgroundColor: lightTheme.palette.bodyColor.main,
					color: lightTheme.palette.iconColor.main,
				}}
			/>
		),
		year: 2000,
		title: 'Higher Secondary Certificate',
		institute: 'Cardiff School',
	},
	{
		id: 4,
		icon: (
			<WorkspacePremiumOutlinedIcon
				className={styles.cardIcon}
				sx={{
					fontSize: 45,
					backgroundColor: lightTheme.palette.bodyColor.main,
					color: lightTheme.palette.iconColor.main,
				}}
			/>
		),
		year: 1998,
		title: 'Secondary School Certificate',
		institute: 'Cardiff School',
	},
];

function Education() {
	return (
		<>
			<Box container className={styles.wrapper}>
				<Container>
					<Grid className={styles.titleWrap}>
						<Grid item>
							<Typography
								variant='h2'
								component='h2'
								align='center'
								fontWeight='bold'
								color={lightTheme.palette.text.dark}>
								Education
							</Typography>
						</Grid>
					</Grid>
					<Grid container>
						{educationList.map((education) => (
							<Grid
								item
								md={6}
								key={education.id}
								sx={{ flexGrow: 1 }}>
								<Card className={styles.card}>
									{education.icon}
									<CardContent className={styles.cardContent}>
										<Typography
											className={styles.cardYear}
											component='p'
											variant='body2'
											color={
												lightTheme.palette.text.main
											}>
											{education.year}
										</Typography>
										<Typography
											component='h4'
											variant='h4'
											fontWeight='700'
											marginBottom='.5rem'
											color={
												lightTheme.palette.text.dark
											}>
											{education.title}
										</Typography>
										<Typography
											component='p'
											variant='body2'
											fontWeight='400'
											color={
												lightTheme.palette.text.light
											}>
											{education.institute}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				<img
					className={styles.bgImage}
					src='../images/backgrounds/education-bg.png'
					alt='The Soul'
				/>
			</Box>
		</>
	);
}

export default Education;
