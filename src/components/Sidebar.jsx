import React, { useState, useContext } from 'react';
import { Flex, Text, IconButton, Divider, Avatar, Heading, ListItem } from '@chakra-ui/react';
import { FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign } from 'react-icons/fi';
import { IoPawOutline } from 'react-icons/io5';
import NavItem from '../components/NavItem';
import { Link, useRouteMatch } from 'react-router-dom';
import AppContext from '../context/app-context';
export default function Sidebar() {
	const [navSize, changeNavSize] = useState('large');
	let { path, url } = useRouteMatch();
	const { state, dispatch } = useContext(AppContext);
	const navListItems = {
		student: [
			{
				icon: FiHome,
				title: 'Home',
			},
			{
				icon: FiUser,
				title: 'Profile',
			},
			{
				icon: FiDollarSign,
				title: 'Jobs',
			},
			{
				icon: IoPawOutline,
				title: 'Notifications',
			},
			{
				icon: FiDollarSign,
				title: 'Events',
			},
		],

		college: [
			{
				icon: FiHome,
				title: 'Home',
			},
			{
				icon: FiUser,
				title: 'Profile',
			},
			{
				icon: FiUser,
				title: 'Students',
			},
			{
				icon: FiDollarSign,
				title: 'Jobs',
			},
			{
				icon: IoPawOutline,
				title: 'Notifications',
			},
			{
				icon: FiDollarSign,
				title: 'Events',
			},
		],

		company: [
			{
				icon: FiHome,
				title: 'Home',
			},
			{
				icon: FiUser,
				title: 'Profile',
			},
			{
				icon: FiUser,
				title: 'Colleges',
			},
			{
				icon: FiUser,
				title: 'Students',
			},
			{
				icon: FiDollarSign,
				title: 'Jobs',
			},
			{
				icon: IoPawOutline,
				title: 'Notifications',
			},
			{
				icon: FiDollarSign,
				title: 'Events',
			},
		],
	};
	return (
		<Flex
			className="side-nav"
			pos="fixed"
			h="100vh"
			w={navSize == 'small' ? '75px' : '200px'}
			flexDir="column"
			justifyContent="space-between"
			bgColor="purple.100"
		>
			<Flex
				p="5%"
				pt="5px"
				pb="5px"
				flexDir="column"
				w="100%"
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				as="nav"
			>
				<IconButton
					background="none"
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize == 'small') changeNavSize('large');
						else changeNavSize('small');
					}}
				/>
				{state.user &&
					navListItems[state.user.userType].map((listItem) => (
						<Link
							to={`${path}/${listItem.title.toLowerCase()}`}
							style={{ width: '100%' }}
						>
							<NavItem
								navSize={navSize}
								icon={listItem.icon}
								title={listItem.title}
							/>
						</Link>
					))}
			</Flex>

			<Flex
				p="5%"
				flexDir="column"
				w="100%"
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				mb={4}
			>
				<Divider display={navSize == 'small' ? 'none' : 'flex'} />
				<Flex mt={4} align="center">
					<Avatar size="sm" src="avatar-1.jpg" />
					<Flex flexDir="column" ml={4} display={navSize == 'small' ? 'none' : 'flex'}>
						<Heading as="h3" size="sm">
							Sylwia Weller
						</Heading>
						<Text color="gray">Admin</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
