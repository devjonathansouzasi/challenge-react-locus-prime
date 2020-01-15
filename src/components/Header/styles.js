import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80px;
	margin-bottom: 35px;
`;

export const HeaderTitle = styled(Link)`
	font-size: 2em;
	font-weight: bold;
	color: ${colors.primary};
`;

export const UserInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: 0.8em;
`;
export const Name = styled.p`
	color: ${colors.primary};
	font-weight: bold;
`;
export const LogoutButton = styled.button`
	margin-top: 5px;
	border: none;
	color: ${colors.gray};
	font-weight: bold;
`;
