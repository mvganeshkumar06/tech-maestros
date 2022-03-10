import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentProfileForm from '../components/StudentProfileForm';
import AppContext from '../context/app-context';
import List from '../components/Table';
import Student from './Student';
import Home from './Home';
import Colleges from './Colleges';

import JobList from '../components/JobList';
export default function Dashboard() {
	let { path, url } = useRouteMatch();
	const { state, dispatch } = useContext(AppContext);
	console.log(state);
	return (
		<div className="dashboard">
			<Grid templateColumns="200px calc(100% - 200px)">
				<GridItem w="100%" rowSpan={4} colSpan={1}>
					<Sidebar />
				</GridItem>
				<GridItem>
					<Switch>
						<Route path={`${path}/home`} exact>
							<Text
								fontSize="4xl"
								fontWeight={'bold'}
								p={10}
								pb={0}
								color={'purple.600'}
							>
								Home
							</Text>
						</Route>
						<Route path={`${path}/profile`} exact>
							<StudentProfileForm />
						</Route>
						<Route path={`${path}/jobs`} exact>
							<JobList />
						</Route>
						<Route path={`${path}/notifications`} exact>
							<Text
								fontSize="4xl"
								fontWeight={'bold'}
								p={10}
								pb={0}
								color={'purple.600'}
							>
								Notifications
							</Text>
						</Route>
						<Route path={`${path}/events`} exact>
							<Text
								fontSize="4xl"
								fontWeight={'bold'}
								p={10}
								pb={0}
								color={'purple.600'}
							>
								Events
							</Text>
						</Route>
						<Route path={`${path}/students`} exact>
							<Student showProceedBtn={false} />
						</Route>
						<Route path={`${path}/colleges`} exact>
							<Colleges />
						</Route>
					</Switch>
				</GridItem>
			</Grid>
		</div>
	);
}
