import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/About.module.scss';

function About() {
	return (
		<>
			<Grid container className={styles.aboutWrapper}>
				<Grid item md={7} sx={{ mx: 'auto' }}>
					<Box className={styles.aboutInner}>
						<Typography
							component='p'
							variant='h4'
							color={lightTheme.palette.text.dark}
							className={styles.aboutText}>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur.
						</Typography>
						<Typography
							variant='h4'
							component='a'
							size='large'
							href='#'
							color={lightTheme.palette.text.primary}
							className={styles.aboutButton}>
							Know More
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default About;
