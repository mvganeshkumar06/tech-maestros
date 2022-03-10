import React from 'react';
import { Flex, Avatar, Text, Button, Tag, UnorderedList, ListItem } from '@chakra-ui/react';

import Student from '../pages/Student';
function PostDescription() {
	const post = {
		name: 'Google',
		imgUrl: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
		industry: 'Information Technology Company',
		location: 'Silicon Valley, California',
		role: 'Front End Developer',
		ctc: '7 - 8 LPA',
		description: [
			'Build and maintain a robust and dynamic web application for Traders and Portfolio managers',
			'Create and deploy automated processes to load, clean, and analyze data',
			'Connect processes on different systems and platforms into a cohesive workflow',
			'Develop tools for portfolio managers and researchers',
		],
		companyDescription:
			'System Two is building out its infrastructure to support both production and research. Our goal is to incorporate modern tools and best practices for software development and research in order to create a robust and flexible infrastructure. We need intelligent, motivated, and creative developers to help us build and maintain a unique institutional quality platform.',
	};
	return (
		<>
			<Flex
				bgColor={'gray.50'}
				borderRadius="10px"
				width="50rem"
				boxShadow={'0 0 1px rgb(0 12 32 / 4%), 0 2px 6px rgb(3 17 38 / 11%)'}
				p="20px"
				gap="15px"
				flexDirection={'column'}
				margin={'auto'}
				mt={10}
				mb={10}
			>
				<Flex
					p="10px"
					borderRadius="10px"
					border={'2px solid #ddd'}
					flexDirection="column"
					mt={5}
					mb={20}
				>
					<Flex
						w="100%"
						justifyContent={'space-between'}
						alignItems="center"
						borderBottom="2px solid #ddd"
						pb="10px"
					>
						<Flex flexDirection="column">
							<Text fontSize="xl" fontWeight={'700'}>
								{post.role}
							</Text>
							<Text fontWeight="500">{post.ctc}</Text>
						</Flex>
						<Button
							bgColor={'purple.400'}
							color={'#fff'}
							size={'sm'}
							_hover={{
								bg: 'purple.500',
							}}
						>
							Apply
						</Button>
					</Flex>
					<Flex mt="10px" justifyContent="space-between">
						<Flex>
							<Flex flexDirection="column" gap="15px">
								<Flex flexDirection="column">
									<Text fontSize="lg" fontWeight={'600'}>
										About the job
									</Text>
									<UnorderedList>
										{post.description.map((list) => (
											<ListItem>{list}</ListItem>
										))}
									</UnorderedList>
								</Flex>
								<Flex flexDirection="column">
									<Text fontSize="lg" fontWeight={'600'}>
										About the Company
									</Text>
									<Text fontSize="md" width="450px">
										{post.companyDescription}
									</Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							flexDirection="column"
							borderRadius="10px"
							border="2px solid #ddd"
							p="15px"
							width="270px"
							h="fit-content"
						>
							<Text fontWeight="bold">Company</Text>
							<Flex gap="5px" mt="5px">
								<Avatar name={post.name} src={post.imgUrl} m="5px" size="sm" />
								<Flex flexDirection={'column'} justifyContent={'center'}>
									<Text fontSize="md">{post.name}</Text>
								</Flex>
							</Flex>
							<Flex flexDirection="column" mb="5px">
								<Text fontWeight="bold">Location</Text>
								<Text fontSize="sm">{post.location}</Text>
							</Flex>
							<Flex flexDirection="column" mb="5px">
								<Text fontWeight="bold">Job Type</Text>
								<Text fontSize="sm">Full time</Text>
							</Flex>
							<Flex flexDirection="column" mb="5px">
								<Text fontWeight="bold">Skills</Text>
								<Flex mt="5px" flexWrap="wrap" columnGap="5px" rowGap="10px">
									<Tag border="2px solid" color="purple.500" size="sm">
										HTML
									</Tag>
									<Tag border="2px solid" color="purple.500" size="sm">
										CSS
									</Tag>
									<Tag border="2px solid" color="purple.500" size="sm">
										React JS
									</Tag>
									<Tag border="2px solid" color="purple.500" size="sm">
										jQuery
									</Tag>
									<Tag border="2px solid" color="purple.500" size="sm">
										Git
									</Tag>
									<Tag border="2px solid" color="purple.500" size="sm">
										Angular
									</Tag>
								</Flex>
							</Flex>
							<Flex flexDirection="column" mb="5px">
								<Text fontWeight="bold">Deadline</Text>
								<Text fontSize="sm">12 March 2022</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			<Student />
		</>
	);
}

export default PostDescription;
