import React from "react";

import { AuthRoutes } from "~/routes/AuthRoutes";

import { Container, Content, Title } from "./styles";

export default function AuthLayout() {
	return (
		<Container>
			<Content>
				<Title>GIT PROFILES</Title>
				<AuthRoutes />
			</Content>
		</Container>
	);
}
