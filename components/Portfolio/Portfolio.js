import {
	Box,
	Button,
	Container,
	Grid,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Typography,
} from '@mui/material';
import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Portfolio.module.scss';

const portfolioList = [
	{
		id: 1,
		image: '../images/portfolio/item-1.png',
		button: 'View Project',
		title: 'The Soul',
	},
	{
		id: 2,
		image: '../images/portfolio/item-2.png',
		button: 'View Project',
		title: 'The Soul',
	},
	{
		id: 3,
		image: '../images/portfolio/item-3.png',
		button: 'View Project',
		title: 'The Soul',
	},
	{
		id: 4,
		image: '../images/portfolio/item-4.png',
		button: 'View Project',
		title: 'The Soul',
	},
	{
		id: 5,
		image: '../images/portfolio/item-5.png',
		button: 'View Project',
		title: 'The Soul',
	},
	{
		id: 6,
		image: '../images/portfolio/item-6.png',
		button: 'View Project',
		title: 'The Soul',
	},
	{
		id: 7,
		image: '../images/portfolio/item-7.png',
		button: 'View Project',
		title: 'The Soul',
	},
];

function Portfolio() {
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
								Portfolio
							</Typography>
						</Grid>
					</Grid>
					<Box>
						<ImageList variant='masonry' cols={3} gap={24}>
							{portfolioList.map((item) => (
								<ImageListItem
									key={item.id}
									className={styles.item}>
									<img src={item.image} alt={item.title} />
									<div className={styles.hoverOverlay}>
										<div className={styles.hoverContent}>
											<Button
												className={styles.itemButton}
												variant='contained'
												href='#'
												sx={{
													backgroundColor:
														lightTheme.palette.text
															.white,
													color: lightTheme.palette
														.text.dark,
													fontFamily:
														lightTheme.typography
															.button,
												}}>
												{item.button}
											</Button>
										</div>
									</div>
								</ImageListItem>
							))}
						</ImageList>
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default Portfolio;
