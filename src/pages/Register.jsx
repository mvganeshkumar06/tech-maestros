import React, { useState, useEffect, useContext } from 'react';
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
	Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import AppContext from '../context/app-context';
import jwtDecode from 'jwt-decode';

export default function Register() {
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userType, setUserType] = useState('');

	const handleSubmit = async () => {
		dispatch({
			type: 'SET_IS_LOADING',
			payload: { register: true },
		});
		try {
			const response = await axios({
				method: 'post',
				url: 'https://tech-maestros-api.herokuapp.com/auth/register',
				data: {
					userType: userType,
					name: name,
					email: email,
					password: password,
				},
			});

			history.push('/login');
		} catch (error) {
			console.log(error);
		} finally {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { register: false },
			});
		}
	};

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

						<FormControl id="name">
							<FormLabel>Name</FormLabel>
							<Input type="name" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input
								type="email"
								onChange={(event) => setEmail(event.target.value)}
							/>
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								onChange={(event) => setPassword(event.target.value)}
							/>
						</FormControl>
						<FormControl id="confirmPasswoad">
							<FormLabel>Confirm Password</FormLabel>
							<Input
								type="password"
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
						</FormControl>
						<FormControl id="userType">
							<FormLabel>Register As</FormLabel>
							<Select
								placeholder="Select option"
								onChange={(event) => setUserType(event.target.value)}
							>
								<option value="student">Student</option>
								<option value="college">College</option>
								<option value="company">Company</option>
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
								onClick={handleSubmit}
							>
								{state.isLoading.register ? <Spinner size="md" /> : 'REGISTER'}
							</Button>
							<Text fontSize={'sm'} color={'gray.600'}>
								Already have an account?
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
