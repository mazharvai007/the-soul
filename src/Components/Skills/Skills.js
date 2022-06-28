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
						<Grid item md={3}>
							<Card
								sx={{
									backgroundColor: theme.palette.bodyColor,
									textAlign: 'center',
									boxShadow:
										'0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)',
									position: 'relative',
								}}>
								<CardMedia
									className='progressWrapper'
									datacolor='#fdb157'
									sx={{ position: 'relative' }}>
									<Typography
										component='div'
										className='wave'
										dataprogressbar='90%'></Typography>
								</CardMedia>
								<CardContent>
									<Typography
										component='h4'
										variant='h4'
										fontWeight='bold'
										color={theme.palette.text.dark}>
										Web Design (90%)
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card
								sx={{
									backgroundColor: theme.palette.bodyColor,
									textAlign: 'center',
									boxShadow:
										'0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)',
									position: 'relative',
								}}>
								<CardMedia
									className='progressWrapper'
									datacolor='#9473e6'
									sx={{ position: 'relative' }}>
									<Typography
										component='div'
										className='wave'
										dataprogressbar='60%'></Typography>
								</CardMedia>
								<CardContent>
									<Typography
										component='h4'
										variant='h4'
										fontWeight='bold'
										color={theme.palette.text.dark}>
										Logo Design (60%)
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card
								sx={{
									backgroundColor: theme.palette.bodyColor,
									textAlign: 'center',
									boxShadow:
										'0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)',
									position: 'relative',
								}}>
								<CardMedia
									className='progressWrapper'
									datacolor='#bdecf6'
									sx={{ position: 'relative' }}>
									<Typography
										component='div'
										className='wave'
										dataprogressbar='80%'></Typography>
								</CardMedia>
								<CardContent>
									<Typography
										component='h4'
										variant='h4'
										fontWeight='bold'
										color={theme.palette.text.dark}>
										After Effects (80%)
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card
								sx={{
									backgroundColor: theme.palette.bodyColor,
									textAlign: 'center',
									boxShadow:
										'0px 18px 39.1px 6.9px rgb(224 241 255 / 34%)',
									position: 'relative',
								}}>
								<CardMedia
									className='progressWrapper'
									datacolor='#ffbcaa'
									sx={{ position: 'relative' }}>
									<Typography
										component='div'
										className='wave'
										dataprogressbar='70%'></Typography>
								</CardMedia>
								<CardContent>
									<Typography
										component='h4'
										variant='h4'
										fontWeight='bold'
										color={theme.palette.text.dark}>
										Web App (70%)
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}

export default Skills;
