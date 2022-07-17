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
import { theme } from '../../theme';
import './Skills.css';

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
			<Box container sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
				<Container>
					<Grid sx={{ marginBottom: '80px' }}>
						<Grid item>
							<Typography
								component='h2'
								variant='h2'
								align='center'
								fontWeight='700'
								color={theme.palette.text.dark}>
								Skills
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={3} sx={{ flexGrow: 1 }}>
						{skillsData.map((skill) => (
							<Grid item md={3} key={skill.id}>
								<Card
									sx={{
										backgroundColor:
											theme.palette.bodyColor,
										textAlign: 'center',
										boxShadow:
											'0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)',
										position: 'relative',
									}}>
									<CardMedia
										className='progressWrapper'
										datacolor={skill.color}
										sx={{ position: 'relative' }}>
										<Typography
											component='div'
											className='wave'
											dataprogressbar={
												skill.progress
											}></Typography>
									</CardMedia>
									<CardContent>
										<Typography
											component='h4'
											variant='h4'
											fontWeight='bold'
											color={theme.palette.text.dark}>
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
