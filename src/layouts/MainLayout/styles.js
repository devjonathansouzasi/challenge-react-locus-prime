import { Form as unForm } from "@rocketseat/unform";
import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 800px;
	height: 100vh;
	padding: 45px 20px 0;
	margin: 0 auto;
	background-color: ${colors.lightgray};
`;

export const Form = styled(unForm)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-self: stretch;
	width: 100%;
	height: auto;
	margin-bottom: 20px;
	padding: 20px 20px 10px;
	border-radius: 4px;
	background-color: ${colors.white};
`;

export const Group = styled.div`
	width: 100%;
	@media (min-width: 850px) {
		margin-right: ${props => `${props.mr}px` || "0px"};
		flex: ${props => props.flex || "auto"};
	}
`;
