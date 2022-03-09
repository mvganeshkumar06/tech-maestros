import React from 'react';
import JobListItem from '../components/JobListItem';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: '100%',
				alignItems: 'center',
			}}
		>
			<h1>HOME</h1>
			<Link to="/login">
				<Button colorScheme="purple" size="md">
					Login
				</Button>
			</Link>
		</div>
	);
};

export default Home;
