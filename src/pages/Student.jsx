import React, { useState, useEffect, useContext } from 'react';

import List from '../components/Table';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import AppContext from '../context/app-context';

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
		<>
			<Button colorScheme="purple" onClick={sendEmail} isLoading={state.isLoading.sendMails}>
				Proceed to Next Round
			</Button>
			<List data={studentList} />
		</>
	) : null;
}
