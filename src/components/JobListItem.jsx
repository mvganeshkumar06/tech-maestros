import React from 'react';
import { Wrap, WrapItem, Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { Link, useRouteMatch } from 'react-router-dom';
function JobListItem({ name, source, industry, location, role }) {
	let { path, url } = useRouteMatch;
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
			>
				<Flex gap="20px">
					<Avatar name={name} src={source} m="10px" />
					<Flex flexDirection={'column'} justifyContent={'center'}>
						<Text
							fontSize="2xl"
							fontWeight={600}
							lineHeight={'22px'}
							color="purple.400"
						>
							{name}
						</Text>
						<Text
							fontSize="sm"
							fontWeight={500}
							lineHeight={'20px'}
							mt="4px"
							color="purple.400"
						>
							{industry}
						</Text>
						<Text
							fontSize="xs"
							fontWeight={400}
							lineHeight={'16px'}
							mt="2px"
							color={'gray.400'}
						>
							{location}
						</Text>
					</Flex>
				</Flex>
				<Flex
					justifyContent="space-between"
					alignItems={'center'}
					p="10px"
					borderRadius="10px"
					border={'2px solid #ddd'}
				>
					<Text>{role}</Text>

					<Link to={`/${'post-description'}`}>
						<Button
							bgColor={'purple.400'}
							color={'#fff'}
							size={'sm'}
							_hover={{
								bg: 'purple.500',
							}}
						>
							View Details
						</Button>
					</Link>
				</Flex>
			</Flex>
		</>
	);
}

export default JobListItem;
