import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "~/pages/Login";
import Register from "~/pages/Register";
import { authHistory } from "~/services/historys";

export function AuthRoutes() {
	return (
		<Router history={authHistory}>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="*" component={() => <Redirect to="/login" />} />
			</Switch>
		</Router>
	);
}
