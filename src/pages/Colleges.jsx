import React, { useState, useEffect, useContext } from 'react';

import List from '../components/CollegeTable';
import axios from 'axios';
import { Button, Flex } from '@chakra-ui/react';
import AppContext from '../context/app-context';
import { Spinner } from '@chakra-ui/react';

export default function Colleges() {
	const { state, dispatch } = useContext(AppContext);
	const [collegeList, setCollegeList] = useState([]);
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

	return (
		<Flex
			p="10px"
			borderRadius="10px"
			border={'2px solid #ddd'}
			flexDirection="column"
			justifyContent={'center'}
			margin={'auto'}
			mt={10}
			mb={20}
			width="50rem"
		>
			{state.isLoading.getColleges ? (
				<Spinner size={'xl'} textAlign={'center'} margin={'auto'} />
			) : (
				<List data={collegeList} />
			)}
		</Flex>
	);
}
