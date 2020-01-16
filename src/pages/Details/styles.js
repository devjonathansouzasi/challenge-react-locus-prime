import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 40px;
	padding: 0 20px 20px;
	border-radius: 4px;
	background-color: ${colors.white};
`;
export const Avatar = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 60px;
	margin-top: -60px;
	margin-bottom: 20px;
`;

export const Name = styled.p`
	font-size: 1em;
	font-weight: bold;
	color: ${colors.primary};
	margin-bottom: 5px;
`;
export const Username = styled.p`
	font-size: 1em;
	color: ${colors.gray};
	margin-bottom: 20px;
`;
export const StatsContainer = styled.div`
	display: flex;
	margin-bottom: 20px;
`;
export const Repos = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	font-size: 1.5em;
	color: ${colors.gray};
`;
export const Followers = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	font-size: 1.5em;
	color: ${colors.gray};
`;
export const SavedAt = styled.div`
	color: ${colors.dark1};
	font-size: 1em;
`;
