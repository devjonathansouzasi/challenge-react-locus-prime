import React, { useState } from "react";

import Header from "~/components/Header";
import { AppRoutes } from "~/routes/AppRoutes";

import { Container } from "./styles";

export default function MainLayout({ history }) {
	return (
		<Container>
			<Header />
			<AppRoutes />
		</Container>
	);
}
