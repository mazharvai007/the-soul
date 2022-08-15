import React, { useState } from 'react';
import { lightTheme } from '../../styles/theme/lightTheme';
import styles from '../../styles/Contact.module.scss';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { useForm } from 'react-hook-form';

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		shouldUseNativeValidation: true,
	});
	const onSubmit = (data) => console.log(data);
	console.log(errors);

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
								Contact Info
							</Typography>
						</Grid>
					</Grid>
					<Grid
						className={styles.contactForm}
						container
						item
						md={8}
						mx='auto'
						sx={{
							backgroundColor: lightTheme.palette.bodyColor.main,
						}}>
						<Grid item md={12} width='100%'>
							<Typography
								variant='h4'
								component='h4'
								align='center'
								fontWeight='bold'
								marginBottom='80px'
								color={lightTheme.palette.text.dark}>
								Contact Form
							</Typography>
						</Grid>
						<form
							action=''
							align='center'
							method='POST'
							onSubmit={handleSubmit(onSubmit)}>
							<Grid container spacing={4}>
								<Grid item md={6} width='100%'>
									<input
										className={styles.formField}
										style={lightTheme.typography.formText}
										name='fullName'
										type='text'
										placeholder='Full Name'
										{...register('fullName', {
											required:
												'Please enter your full name',
											maxLength: 80,
										})}
									/>
								</Grid>
								<Grid item md={6}>
									<input
										className={styles.formField}
										name='yourEmail'
										style={lightTheme.typography.formText}
										type='text'
										placeholder='Your Email'
										{...register('yourEmail', {
											required:
												'Please enter your valid email',
											pattern: /^\S+@\S+$/i,
										})}
									/>
								</Grid>
								<Grid item md={12}>
									<textarea
										name='yourMessage'
										className={styles.formField}
										style={lightTheme.typography.formText}
										placeholder='Type Message Here'
										{...register('yourMessage', {
											required:
												'Please enter your message here',
											maxLength: 12,
										})}
									/>
								</Grid>
								<Grid item md={12}>
									<Button
										type='submit'
										variant='contained'
										className={styles.submitButton}
										sx={{
											color: lightTheme.palette.text
												.white,
										}}>
										Send
									</Button>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Container>
			</Box>
		</>
	);
}

export default Contact;
