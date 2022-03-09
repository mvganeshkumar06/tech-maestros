import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, Register, NotFound, Dashboard } from '../pages';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/dashboard" exact>
					<Dashboard />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
