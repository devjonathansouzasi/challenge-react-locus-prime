import React from "react";

import {
	Container,
	HeaderTitle,
	UserInfoContainer,
	Name,
	LogoutButton
} from "./styles";

export default function Header() {
	return (
		<Container>
			<HeaderTitle to="/">GIT PROFILES</HeaderTitle>
			<UserInfoContainer>
				<Name>Jonathan Souza</Name>
				<LogoutButton>Sair</LogoutButton>
			</UserInfoContainer>
		</Container>
	);
}
