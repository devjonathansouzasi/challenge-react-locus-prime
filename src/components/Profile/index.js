import React from "react";

import { Button } from "../Common";
import { Container, Avatar, Name, Username } from "./styles";

export default function Profile({ data, history }) {
	function handleShowProfile(id) {
		history.push(`details/${id}`);
	}

	return (
		<Container>
			<Avatar src={data.avatarUrl} />
			<Name>{data.name}</Name>
			<Username>{data.login}</Username>
			<Button
				full
				mt="20"
				height="35"
				onClick={() => handleShowProfile(data.id)}
			>
				Visualizar
			</Button>
		</Container>
	);
}
