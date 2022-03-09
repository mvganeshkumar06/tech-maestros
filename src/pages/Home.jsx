import React from 'react';
import JobListItem from '../components/JobListItem';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CallToActionWithIllustration from '../components/Home';
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
			<CallToActionWithIllustration />
		</div>
	);
};

export default Home;
