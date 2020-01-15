import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import AuthLayout from "~/layouts/AuthLayout";
import MainLayout from "~/layouts/MainLayout";
import { rootHistory } from "~/services/historys";

import ProtectedRoute from "./ProtectedRoute";

export function RootRoutes() {
	return (
		<Router history={rootHistory}>
			<Switch>
				<Route path="/auth" component={AuthLayout} />
				<ProtectedRoute path="/" component={MainLayout} />
				<Route path="*" component={() => <Redirect to="/auth" />} />
			</Switch>
		</Router>
	);
}
