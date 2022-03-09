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
function StudentProfileForm() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [userType, setUserType] = useState('');
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('#fff', 'gray.800')}
			w={'90%'}
		>
			<Stack spacing={8} mx={'auto'} py={12} px={6} w={'100%'}>
				<Box
					rounded={'md'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
					w={'100%'}
				>
					<Stack spacing={4} paddingTop={4}>
						<Heading fontSize={32} color={useColorModeValue('purple.400')}>
							Create student profile
						</Heading>
						<Text fontSize={14} color={'gray.600'}>
							Enter your details to create a student profile
						</Text>
						<FormControl id="name">
							<FormLabel>Name</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="dob">
							<FormLabel>Date Of Birth</FormLabel>
							<input type="date"></input>
						</FormControl>
						<FormControl id="phone-no">
							<FormLabel>Phone No</FormLabel>
							<Input
								type="number"
								onChange={(event) => setName(event.target.value)}
							/>
						</FormControl>
						<FormControl id="personal-mail">
							<FormLabel>Personal Mail</FormLabel>
							<Input type="email" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="linkedin">
							<FormLabel>LinkedIn Profile</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="github">
							<FormLabel>Github Profile</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="city">
							<FormLabel>City</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="college-name">
							<FormLabel>College</FormLabel>
							<Select
								placeholder="Select College"
								onChange={(event) => setUserType(event.target.value)}
							>
								<option value="Sri Venkateswara College Of Engineering">
									Sri Venkateswara College Of Engineering
								</option>
								<option value="Sri Sairam Engineering College">
									Sri Sairam Engineering College
								</option>
							</Select>
						</FormControl>
						<FormControl id="degree">
							<FormLabel>Highest Qualification</FormLabel>
							<Select
								placeholder="Select Highest Qualification"
								onChange={(event) => setUserType(event.target.value)}
							>
								<option value="Bachelor of Engineering - BE">
									Bachelor of Engineering - BE
								</option>
								<option value="Bachelor of Technology - BTech">
									Bachelor of Technology - BTech
								</option>
							</Select>
						</FormControl>
						<FormControl id="cgpa">
							<FormLabel>CGPA</FormLabel>
							<Input
								type="number"
								onChange={(event) => setName(event.target.value)}
							/>
						</FormControl>
						<FormControl id="yearofpassing">
							<FormLabel>Year Of Passing</FormLabel>
							<Input
								type="number"
								onChange={(event) => setName(event.target.value)}
							/>
						</FormControl>
						<Stack spacing={4} pt={5} align={'center'}>
							<Button
								bg={'purple.400'}
								color={'white'}
								_hover={{
									bg: 'purple.500',
								}}
								w={'100%'}
								// onClick={handleSubmit}
							>
								Submit
								{/* {state.isLoading.login ? <Spinner size="md" /> : 'LOGIN'}    */}
							</Button>
							<Text fontSize={'sm'} color={'gray.600'}>
								Don't have an account?
								<Link color={'purple.400'} /*as={RouterLink}*/ to="/register">
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

export default StudentProfileForm;
