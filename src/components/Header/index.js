import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { rootHistory } from "~/services/historys";
import { AuthActions } from "~/store/ducks/auth";

import {
	Container,
	HeaderTitle,
	UserInfoContainer,
	Name,
	LogoutButton
} from "./styles";

export default function Header() {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	function handleLogout() {
		dispatch(AuthActions.logout());
		rootHistory.replace("/");
	}

	return (
		<Container>
			<HeaderTitle to="/">GIT PROFILES</HeaderTitle>
			<UserInfoContainer>
				<Name>{auth.user.name}</Name>
				<LogoutButton onClick={handleLogout}>Sair</LogoutButton>
			</UserInfoContainer>
		</Container>
	);
}
