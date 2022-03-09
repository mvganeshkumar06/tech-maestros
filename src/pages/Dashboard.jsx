import React from 'react';
import Sidebar from '../components/Sidebar';
import { Grid, GridItem } from '@chakra-ui/react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentProfileForm from '../components/StudentProfileForm';

export default function Dashboard() {
	let { path, url } = useRouteMatch();
	return (
		<div className="dashboard">
			<Grid templateColumns="200px calc(100% - 200px)">
				<GridItem w="100%" rowSpan={4} colSpan={1}>
					<Sidebar />
				</GridItem>
				<GridItem>
					<Switch>
						<Route path={`${path}/profile`} exact>
							<StudentProfileForm />
						</Route>
						<Route path={`${path}/home`}>
							<StudentProfileForm />
						</Route>
						<Route path={`${path}/jobs`} exact>
							<h1>Hellio from jobs</h1>
						</Route>
					</Switch>
				</GridItem>
			</Grid>
		</div>
	);
}
