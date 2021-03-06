import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import JobListItem from './JobListItem';

function JobList() {
	const list = [
		{
			name: 'Google',
			imgUrl: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
			industry: 'Information Technology Company',
			location: 'Silicon Valley, California',
			role: 'Front End Developer',
		},
		{
			name: 'Meta',
			imgUrl: 'https://www.facebook.com/images/fb_icon_325x325.png',
			industry: 'Information Technology Company',
			location: 'Silicon Valley, California',
			role: 'Back End Developer',
		},
		{
			name: 'Zoho',
			imgUrl: 'https://pbs.twimg.com/profile_images/1475519978870689796/XtL47zGO_400x400.jpg',
			industry: 'Information Technology Company',
			location: 'Tamil Nadu',
			role: 'Full Stack Developer',
		},
		{
			name: 'FreshWorks',
			imgUrl: 'https://pbs.twimg.com/profile_images/941190946472935424/yOYhYjob_400x400.jpg',
			industry: 'Information Technology Company',
			location: 'Tamil Nadu',
			role: 'Blockchain Developer',
		},
	];
	return (
		<>
			<Text
				fontSize="4xl"
				fontWeight={'bold'}
				p={10}
				pb={0}
				color={'purple.600'}
				textAlign={'center'}
			>
				Apply for Jobs
			</Text>
			<Flex flexDirection={'column'} gap={'20px'} alignItems="center" m="1rem 0">
				{list.map(({ name, imgUrl, industry, location, role }) => {
					return (
						<JobListItem
							name={name}
							source={imgUrl}
							industry={industry}
							location={location}
							role={role}
						/>
					);
				})}
			</Flex>
		</>
	);
}

export default JobList;
