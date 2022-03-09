import React from 'react';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Link,
	Heading,
	Text,
	useColorModeValue,
	Select,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

export default function Register() {
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Box
					rounded={'md'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
					w={400}
				>
					<Stack spacing={2} paddingTop={4}>
						<Heading fontSize={32} color={useColorModeValue('purple.400')}>
							Register
						</Heading>
						<FormControl id="userName">
							<FormLabel>User Name</FormLabel>
							<Input type="userName" />
						</FormControl>
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" />
						</FormControl>
						<FormControl id="confirmPasswoad">
							<FormLabel>Confirm Password</FormLabel>
							<Input type="confirmPassword" />
						</FormControl>
						<FormControl id="userType">
							<FormLabel>Register As</FormLabel>
							<Select placeholder="Select option">
								<option value="option1">Student</option>
								<option value="option2">College</option>
								<option value="option3">Company</option>
							</Select>
						</FormControl>
						<Stack spacing={4} pt={5} align={'center'}>
							<Button
								bg={'purple.400'}
								color={'white'}
								_hover={{
									bg: 'purple.500',
								}}
								w={'100%'}
							>
								REGISTER
							</Button>
							<Text fontSize={'sm'} color={'gray.600'}>
								Already have an account?{' '}
								<Link color={'purple.400'} as={RouterLink} to="/login">
									Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
