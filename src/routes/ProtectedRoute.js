import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
	const auth = useSelector(state => state.auth);

	function hasUser() {
		return auth.user.name && auth.user.email;
	}

	return (
		<Route
			{...rest}
			render={() => (hasUser() ? <Component /> : <Redirect to="/auth/login" />)}
		/>
	);
}
