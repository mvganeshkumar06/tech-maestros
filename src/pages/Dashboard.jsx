import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { Grid, GridItem } from '@chakra-ui/react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentProfileForm from '../components/StudentProfileForm';
import AppContext from '../context/app-context';
import Home from './Home';
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
							<Home />
						</Route>
						<Route path={`${path}/profile`} exact>
							<StudentProfileForm />
						</Route>
						<Route path={`${path}/jobs`} exact>
							<h1>Jobs</h1>
						</Route>
						<Route path={`${path}/notifications`} exact>
							<h1>Notifications</h1>
						</Route>
						<Route path={`${path}/events`} exact>
							<h1>Events</h1>
						</Route>
					</Switch>
				</GridItem>
			</Grid>
		</div>
	);
}
