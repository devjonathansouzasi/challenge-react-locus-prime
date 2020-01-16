import styled from "styled-components";

import { colors } from "~/styles/constants";

import { Button } from "../Common";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 20px;
	margin: 10px;
	border-radius: 4px;
	background-color: ${colors.white};
	@media (min-width: 850px) {
		width: 360px;
	}
`;
export const Avatar = styled.img`
	height: 80px;
	margin-bottom: 20px;
	border-radius: 40px;
`;
export const Name = styled.p`
	font-size: 1em;
	font-weight: bold;
	color: ${colors.primary};
	margin-bottom: 10px;
`;
export const Username = styled.p`
	font-size: 1em;
	color: ${colors.gray};
`;
