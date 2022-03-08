import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Auth, NotFound } from '../pages';

const Router = () => {
	return (
		<BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Auth />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
		</BrowserRouter>
	);
};

export default Router;
