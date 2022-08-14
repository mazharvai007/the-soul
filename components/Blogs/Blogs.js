import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Blogs.module.scss';
import { Box, Container } from '@mui/system';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

const blogItems = [
	{
		id: 1,
		image: 'images/blog/post-3.jpg',
		title: 'Amazon increase income 1.5 Million',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		button: 'Read More',
	},
	{
		id: 2,
		image: 'images/blog/post-2.jpg',
		title: 'Amazon increase income 1.5 Million',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		button: 'Read More',
	},
	{
		id: 3,
		image: 'images/blog/post-4.jpg',
		title: 'Amazon increase income 1.5 Million',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		button: 'Read More',
	},
];

function Blogs() {
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
								Blogs
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={4}>
						{blogItems.map((item) => (
							<Grid
								item
								md={4}
								key={item.id}
								sx={{ flexGrow: 1 }}>
								<Card className={styles.card}>
									<CardMedia>
										<img
											width='100%'
											src={item.image}
											alt={item.title}
										/>
									</CardMedia>
									<CardContent className={styles.cardContent}>
										<Typography
											component='h4'
											variant='h4'
											fontWeight='700'
											marginBottom='.75rem'
											color={
												lightTheme.palette.text.dark
											}>
											{item.title}
										</Typography>
										<Typography
											component='p'
											variant='body2'
											fontWeight='400'
											marginBottom='1rem'
											color={
												lightTheme.palette.text.dark
											}>
											{item.description}
										</Typography>
										<Button
											variant='contained'
											href='#'
											className={styles.itemButton}>
											{item.button}
										</Button>
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

export default Blogs;
