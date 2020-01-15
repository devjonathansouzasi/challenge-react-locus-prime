import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Details from "~/pages/Details";
import Main from "~/pages/Main";

export function AppRoutes() {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/details" component={Details} />
				<Route path="*" component={() => <Redirect to="/" />} />
			</Switch>
		</BrowserRouter>
	);
}
