import React, { useState, useEffect, useContext } from 'react';

import List from '../components/Table';
import axios from 'axios';
import { Button, Flex } from '@chakra-ui/react';
import AppContext from '../context/app-context';
import { Spinner } from '@chakra-ui/react';

export default function Student() {
	const { state, dispatch } = useContext(AppContext);
	const [studentList, setStudentList] = useState();
	const [studentEmails, setStudentEmails] = useState([]);
	const getData = async () => {
		try {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { getStudents: true },
			});

			const response = await axios({
				method: 'get',
				url: 'https://tech-maestros-api.herokuapp.com/students/',
			});
			setStudentList(response['data']);
		} catch (error) {
			console.log(error);
		} finally {
			console.log(studentList);
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { getStudents: false },
			});
		}
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (studentList) {
			const emails = studentList.map((student) => student.collegeEmail);
			console.log(emails);
			setStudentEmails(emails);
		}
	}, [studentList]);

	const sendEmail = async () => {
		try {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { sendMails: true },
			});
			await axios({
				method: 'post',
				url: 'https://tech-maestros-api.herokuapp.com/companies/sendmails',
				data: { emails: studentEmails },
			});
		} catch (error) {
			console.log(error);
		} finally {
			dispatch({
				type: 'SET_IS_LOADING',
				payload: { sendMails: false },
			});
		}
	};

	return !state.isLoading.getStudents ? (
		<Flex
			p="10px"
			borderRadius="10px"
			border={'2px solid #ddd'}
			flexDirection="column"
			mt={5}
			mb={20}
			width="50rem"
			margin={'auto'}
		>
			<Button
				colorScheme="purple"
				onClick={sendEmail}
				isLoading={state.isLoading.sendMails}
				w={'50%'}
				m={'auto'}
			>
				Proceed to Next Round
			</Button>
			<List data={studentList} />
		</Flex>
	) : (
		<Spinner size={'xl'} margin={'auto'} />
	);
}
