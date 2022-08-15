import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Footer.module.scss';
import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from '@mui/material';

const footerItems = [
	{
		id: 1,
		title: 'Email',
		content: 'steve.fruits@email.com',
	},
	{
		id: 2,
		title: 'Phone',
		content: '+880 2544 658 256',
	},
	{
		id: 3,
		title: 'Address',
		content: '125/A, CA Commercial Area, California, USA',
	},
];

function Footer() {
	return (
		<>
			<Box
				className={styles.wrapper}
				sx={{ backgroundColor: lightTheme.palette.text.dark }}>
				<Container>
					<Grid container spacing={4} className={styles.infoWrapper}>
						{footerItems.map((item) => (
							<Grid
								item
								md={4}
								key={item.id}
								sx={{ flexGrow: 1 }}>
								<Card className={styles.infoItem}>
									<CardContent className={styles.cardContent}>
										<Typography
											sx={{
												color: lightTheme.palette.text
													.light,
											}}
											component='h5'
											variant='h5'
											fontWeight='700'
											marginBottom='1rem'>
											{item.title}
										</Typography>
										<Typography
											sx={{
												color: lightTheme.palette.text
													.white,
												marginBottom: '0',
											}}
											component='h4'
											variant='h4'
											fontWeight='700'>
											{item.content}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>

				<Grid container>
					<Grid item md={12}>
						<Typography
							className={styles.copyright}
							component='p'
							varient='body2'
							sx={{
								color: lightTheme.palette.text.light,
								borderColor: lightTheme.palette.text,
							}}>
							Copyright ©2022 Designed & Developed by The UI Club
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default Footer;
