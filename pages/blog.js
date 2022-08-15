import Head from 'next/head';

export default function Blog() {
	return (
		<>
			<Head>
				<title>The Soul</title>
				<meta
					name='description'
					content='The Soul is a personal portfolio app'
				/>
				<link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
			</Head>
			<h1>Blog</h1>
		</>
	);
}
