import { Form as unForm } from "@rocketseat/unform";
import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 20px;
	background-color: ${colors.lightgray};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 400px;
	height: auto;
	padding: 10px 20px 20px;
	border-radius: 4px;
	background-color: ${colors.white};
`;

export const Title = styled.p`
	font-size: 2.5em;
	font-weight: bold;
	color: ${colors.primary};
`;

export const Form = styled(unForm)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
	margin-bottom: 20px;
`;
