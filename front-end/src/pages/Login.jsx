import React from 'react';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	Link,
	Text,
	useColorModeValue,
	Select,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
export default function Login() {
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Box
					rounded={'md'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
					w={400}
				>
					<Stack spacing={4} paddingTop={4}>
						<Heading fontSize={32} color={useColorModeValue('purple.400')}>
							Welcome Back
						</Heading>
						<Text fontSize={14} color={'gray.600'}>
							Enter your email and password to sign in
						</Text>
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" />
						</FormControl>
						<FormControl id="userType">
							<FormLabel>Login As</FormLabel>
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
								LOGIN
							</Button>
							<Text fontSize={'sm'} color={'gray.600'}>
								Don't have an account?{' '}
								<Link color={'purple.400'} as={RouterLink} to="/register">
									Register
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
