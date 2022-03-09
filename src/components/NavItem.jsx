import React from 'react';
import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react';

export default function NavItem({ icon, title, active, navSize }) {
	return (
		<Flex
			mt={30}
			flexDir="column"
			w="100%"
			alignItems={navSize == 'small' ? 'center' : 'flex-start'}
		>
			<Menu placement="right">
				<Link
					backgroundColor={active && '#fff'}
					p={3}
					borderRadius={8}
					_hover={{ textDecor: 'none', backgroundColor: '#fff' }}
					w={navSize == 'large' && '100%'}
				>
					<MenuButton w="100%">
						<Flex>
							<Icon
								as={icon}
								fontSize="xl"
								color={active ? '#fff' : 'purple.400'}
								// bgColor={'purple.400'}
							/>
							<Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
								{title}
							</Text>
						</Flex>
					</MenuButton>
				</Link>
			</Menu>
		</Flex>
	);
}
