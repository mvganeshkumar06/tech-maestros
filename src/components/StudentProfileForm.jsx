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
import AppContext from '../context/app-context';
import axios from 'axios';
function StudentProfileForm() {
	const { state, dispatch } = useContext(AppContext);
	const [collegeList, setCollegeList] = useState([]);

	const [studentProfile, setStudentProfile] = useState({
		name: '',
		registrationNumber: '',
		dob: '',
		college: '',
		phone: '',
		collegeEmail: '',
		personalEmail: '',
		// linkedin: '',
		// github: '',
		address: '',
		education: {
			college: {
				graduation: {
					year: '',
				},
				grade: '',
			},
		},
	});

	const getData = async () => {
		try {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { getColleges: true },
			});

			const response = await axios({
				method: 'get',
				url: 'https://tech-maestros-api.herokuapp.com/colleges/',
			});
			setCollegeList(response['data']);
		} catch (error) {
			console.log(error);
		} finally {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { getColleges: false },
			});
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const getStudentProfile = async () => {
		if (state.user) {
			const studentResponse = await axios({
				method: 'get',
				url: `https://tech-maestros-api.herokuapp.com/students/${state.user.id}`,
			});
			setStudentProfile(studentResponse.data);
		}
	};

	useEffect(() => {
		if (state.user) {
			getStudentProfile();
		}
	}, [state.user]);

	const handleSubmit = async () => {
		dispatch({
			type: 'SET_IS_LOADING',
			payload: { profile: true },
		});

		try {
			const response = await axios({
				method: 'post',
				url: `https://tech-maestros-api.herokuapp.com/students/${state.user.id}`,
				data: studentProfile,
			});
		} catch (error) {
			console.log(error);
		} finally {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { profile: false },
			});
		}
	};

	useEffect(() => {
		console.log(studentProfile);
	}, [studentProfile]);
	return;
	state.isLoading.profile && (
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
							<Input
								type="text"
								name="name"
								value={studentProfile.name}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										name: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id="registrationNumber">
							<FormLabel>Registration Number</FormLabel>
							<Input
								type="text"
								value={studentProfile.registrationNumber}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										registrationNumber: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id="dob">
							<FormLabel>Date Of Birth</FormLabel>
							<input
								type="date"
								value={studentProfile.dob}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										dob: event.target.value,
									}))
								}
							></input>
						</FormControl>
						<FormControl id="college-name">
							<FormLabel>College</FormLabel>
							<Select
								placeholder="Select College"
								value={studentProfile.college.name}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										college: { ...prev.college, name: event.target.value },
									}))
								}
							>
								{collegeList?.map((college) => {
									return (
										<option value={college._id}>
											{college.name.toUpperCase()}
										</option>
									);
								})}
							</Select>
						</FormControl>
						<FormControl id="phone-no">
							<FormLabel>Phone No</FormLabel>
							<Input
								type="number"
								value={studentProfile.phone}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										phone: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id="college-mail">
							<FormLabel>College Mail</FormLabel>
							<Input
								type="email"
								value={studentProfile.collegeEmail}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										collegeEmail: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id="personal-mail">
							<FormLabel>Personal Mail</FormLabel>
							<Input
								type="email"
								value={studentProfile.personalEmail}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										personalEmail: event.target.value,
									}))
								}
							/>
						</FormControl>
						{/* <FormControl id="linkedin">
							<FormLabel>LinkedIn Profile</FormLabel>
							<Input
								type="text"
								value={studentProfile.linkedin}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										linkedin: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id="github">
							<FormLabel>Github Profile</FormLabel>
							<Input
								type="text"
								value={studentProfile.github}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										github: event.target.value,
									}))
								}
							/>
						</FormControl> */}
						<FormControl id="address">
							<FormLabel>Address</FormLabel>
							<Input
								type="text"
								value={studentProfile.address}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										address: event.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id="grade">
							<FormLabel>Grade</FormLabel>
							<Input
								type="number"
								value={studentProfile.education.college.grade}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										education: {
											...prev.education,
											college: {
												...prev.education.college,
												grade: event.target.value,
											},
										},
									}))
								}
							/>
						</FormControl>
						<FormControl id="yearofpassing">
							<FormLabel>Year Of Passing</FormLabel>
							<Input
								type="number"
								value={studentProfile.education.college.graduation.year}
								onChange={(event) =>
									setStudentProfile((prev) => ({
										...prev,
										education: {
											...prev.education,
											college: {
												...prev.education.college,
												graduation: {
													...prev.education.college.graduation,
													year: event.target.value,
												},
											},
										},
									}))
								}
							/>
						</FormControl>
						// IS VERIFIED
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
								{state.isLoading.profile ? <Spinner size="md" /> : 'Submit'}
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}

export default StudentProfileForm;
