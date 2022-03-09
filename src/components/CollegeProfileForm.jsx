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
function CollegeProfileForm() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [userType, setUserType] = useState('');
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('#fff', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} py={12} px={6}>
				<Box
					rounded={'md'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
					w={700}
				>
					<Stack spacing={4} paddingTop={4}>
						<Heading fontSize={32} color={useColorModeValue('purple.400')}>
							Create College profile
						</Heading>
						<Text fontSize={14} color={'gray.600'}>
							Enter your details to create a college profile
						</Text>
						<FormControl id="collegename">
							<FormLabel>College Name</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="code">
							<FormLabel>College Code</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="desc">
							<FormLabel>Description</FormLabel>
							<Input
								type="text"
								onChange={(event) => setName(event.target.value)}
							/>
						</FormControl>
						<FormControl id="mail">
							<FormLabel>E-Mail</FormLabel>
							<Input type="email" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="linkedin">
							<FormLabel>LinkedIn Profile</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="website">
							<FormLabel>Website</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="city">
							<FormLabel>City</FormLabel>
							<Input type="text" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="telephone">
							<FormLabel>Telephone Number</FormLabel>
							<Input type="number" onChange={(event) => setName(event.target.value)} />
						</FormControl>
						<FormControl id="total-students">
							<FormLabel>Total Number Of Students</FormLabel>
							<Input type="number" onChange={(event) => setName(event.target.value)} />
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
							>Submit
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

export default CollegeProfileForm;
