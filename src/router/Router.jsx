import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CollegeProfileForm from '../components/CollegeProfileForm';
import { Home, Login, Register, NotFound, Dashboard } from '../pages';
import StudentProfileForm from '../components/StudentProfileForm';
import PostDescription from '../components/PostDescription';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/register" exact>
					<Register />
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/student-profile" exact>
					<StudentProfileForm />
				</Route>
				<Route path="/college-profile" exact>
					<CollegeProfileForm />
				</Route>
				<Route path="/post-description" exact>
					<PostDescription />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
