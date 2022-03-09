import React, { useState, useEffect, useContext } from 'react';

import List from '../components/Table';
import axios from 'axios';

import AppContext from '../context/app-context';

export default function Student() {
	const { state, dispatch } = useContext(AppContext);
	const [studentList, setStudentList] = useState();

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
		console.log(studentList);
	}, [studentList]);

	return !state.isLoading.getStudents ? <List data={studentList} /> : null;
}
