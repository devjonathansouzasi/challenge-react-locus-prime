import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import Details from "~/pages/Details";
import Main from "~/pages/Main";
import { appHistory } from "~/services/historys";

export function AppRoutes() {
	return (
		<Router history={appHistory}>
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/details/:id" component={Details} />
				<Route path="*" component={() => <Redirect to="/" />} />
			</Switch>
		</Router>
	);
}
