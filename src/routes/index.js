import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AuthLayout from "~/layouts/AuthLayout";
import MainLayout from "~/layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";

export function RootRoutes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/auth" component={AuthLayout} />
				<ProtectedRoute path="/" component={MainLayout} />
				<Route path="*" component={() => <Redirect to="/auth" />} />
			</Switch>
		</BrowserRouter>
	);
}
