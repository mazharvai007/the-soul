import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';

function About() {
	return (
		<>
			<Grid container sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
				<Grid item md={7} sx={{ mx: 'auto' }}>
					<Box
						sx={{
							textAlign: 'center',
						}}>
						<Typography
							component='p'
							variant='h4'
							color={theme.palette.text.dark}
							sx={{
								textAlign: 'center',
								fontWeight: 'bold',
								lineHeight: '1.8',
								marginBottom: '16px',
							}}>
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
							color={theme.palette.text.primary}
							sx={{
								textAlign: 'center',
								padding: '16px 44px',
								textDecoration: 'none',
								display: 'inline-block',
								fontWeight: 'bold',
							}}>
							Know More
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default About;
