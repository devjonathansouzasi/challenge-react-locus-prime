import React, { useEffect } from "react";
import {
	GoRepo,
	GoOrganization,
	GoCalendar,
	GoChevronLeft
} from "react-icons/go";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Button } from "~/components/Common";
import { colors } from "~/styles/constants";

import {
	Container,
	Avatar,
	Name,
	Username,
	StatsContainer,
	Repos,
	Followers,
	SavedAt
} from "./styles";

export default function Details({ history }) {
	const { id } = useParams();
	const profile = useSelector(
		state => state.profile.saveds.find(item => String(item.id) === String(id)),
		id
	);

	return (
		<>
			<Button height="30" onClick={() => history.goBack()}>
				<GoChevronLeft color={colors.lightgray} fontSize="1.5em" />
			</Button>
			<Container>
				<Avatar src={profile.avatarUrl} />
				<Name>{profile.name}</Name>
				<Username>@{profile.login}</Username>
				<StatsContainer>
					<Repos>
						<GoRepo color={colors.primary} />
						{profile.repos}
					</Repos>
					<Followers>
						<GoOrganization color={colors.primary} />
						{profile.followers}
					</Followers>
				</StatsContainer>
				<SavedAt>
					<GoCalendar color={colors.primary} /> {profile.date}
				</SavedAt>
			</Container>
		</>
	);
}
