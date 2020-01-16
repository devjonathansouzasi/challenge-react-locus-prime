import moment from "moment";
import React, { useEffect } from "react";
import { Ellipsis } from "react-css-spinners/dist/Ellipsis";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "~/components/Common";
import Input from "~/components/Input";
import Profile from "~/components/Profile";
import { Form, Group } from "~/layouts/MainLayout/styles";
import { showAlert } from "~/services/toasts";
import { ProfileActions } from "~/store/ducks/profile";
import { colors } from "~/styles/constants";

import { Container, ProfilesContainer } from "./styles";

export default function Main({ history }) {
	const profile = useSelector(state => state.profile);
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	function getDateForInputValue() {
		const previousDate = moment()
			.subtract(1, "day")
			.format("YYYY-MM-DD");
		return previousDate;
	}

	function getFormatedDate(date) {
		const dateSplited = date.split("-");
		const formattedDate = `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
		return formattedDate;
	}

	useEffect(() => {
		dispatch(ProfileActions.loadProfilesRequest(auth.user.id));
	}, []);

	function handleSearchProfile(data) {
		if (data.search.trim().length < 0) {
			showAlert("Você precisa o nome do perfil que deseja buscar", "info");
		}

		dispatch(
			ProfileActions.storeProfileRequest({
				userId: auth.user.id,
				search: data.search,
				date: getFormatedDate(data.date)
			})
		);
	}

	return (
		<Container>
			<Form
				onSubmit={handleSearchProfile}
				initialData={{ search: "", date: getDateForInputValue() }}
			>
				<Group flex="1" mr="20">
					<Input
						name="search"
						type="text"
						placeholder="Nome de usuario no github"
					/>
				</Group>
				<Group flex="0" mr="20">
					<Input name="date" type="date" />
				</Group>

				<Button full type="submit">
					Adicionar
				</Button>
			</Form>
			<ProfilesContainer>
				{profile.isLoading ? (
					<Ellipsis color={colors.primary} style={{ justifySelf: "center" }} />
				) : (
					profile.saveds.length > 0 &&
					profile.saveds.map(item => (
						<Profile key={item.id} history={history} data={item} />
					))
				)}
			</ProfilesContainer>
		</Container>
	);
}
