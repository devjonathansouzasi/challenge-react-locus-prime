import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "~/pages/Login";
import Register from "~/pages/Register";

export function AuthRoutes() {
	return (
		<BrowserRouter exact basename="/auth">
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="*" component={() => <Redirect to="/login" />} />
			</Switch>
		</BrowserRouter>
	);
}
