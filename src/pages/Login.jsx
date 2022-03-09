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

export default function Login() {
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();
	const [registrationNumber, setRegistrationNumber] = useState('');
	const [password, setPassword] = useState('');
	const [userType, setUserType] = useState('');

	const handleSubmit = async () => {
		dispatch({
			type: 'SET_IS_LOADING',
			payload: { login: true },
		});
		try {
			const response = await axios({
				method: 'post',
				url: 'https://tech-maestros-api.herokuapp.com/auth/login',
				data: {
					user: userType,
					registrationNumber: registrationNumber,
					password: password,
				},
			});
			const { accessToken } = response.data;
			localStorage.setItem('accessToken', accessToken);
			dispatch({
				type: 'SET_ACCESS_TOKEN',
				payload: accessToken,
			});
			const _user = jwtDecode(accessToken);
			const user = { ..._user, userType: userType };
			localStorage.setItem('userType', userType);
			dispatch({
				type: 'SET_USER',
				payload: user,
			});

			history.push('/dashboard');
		} catch (error) {
			console.log(error);
		} finally {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { login: false },
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
						<FormControl id="registrationNumber">
							<FormLabel>Registration Number</FormLabel>
							<Input
								type="number"
								onChange={(event) => setRegistrationNumber(event.target.value)}
							/>
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								onChange={(event) => setPassword(event.target.value)}
							/>
						</FormControl>
						<FormControl id="userType">
							<FormLabel>Login As</FormLabel>
							<Select
								placeholder="Select User Type"
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
								{state.isLoading.login ? <Spinner size="md" /> : 'LOGIN'}
							</Button>
							<Text fontSize={'sm'} color={'gray.600'}>
								Don't have an account?
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
