import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div``;

export const ProfilesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`;

export const ResultContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 20px;
	background-color: ${colors.white};
`;
