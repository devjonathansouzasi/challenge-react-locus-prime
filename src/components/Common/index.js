import { Link as RRDLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Button = styled.button`
	display: flex;
	align-self: ${props =>
		(props.full && "stretch") ||
		(props.left && "flex-start") ||
		(props.right && "flex-end") ||
		"flex-start"};
	justify-content: center;
	align-items: center;
	height: ${props => (props.height ? `${props.height}px` : `50px`)};
	padding: 0 20px;
	margin-top: ${props => (props.mt ? `${props.mt}px` : "0px")};
	border: none;
	border-radius: 4px;
	font-size: 0.85em;
	font-weight: bold;
	color: ${colors.lightgray};
	opacity: ${props => (props.disabled ? 0.5 : 0.9)};
	cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
	background-color: ${colors.primary};
	transition: opacity 0.3s ease;
	&:hover {
		opacity: ${props => (props.disabled ? 0.5 : 1)};
	}
`;

export const Link = styled(RRDLink)`
	align-self: ${props =>
		(props.align && "center") ||
		(props.align && "flex-start") ||
		(props.align && "flex-end") ||
		"flex-start"};
	font-size: 0.8em;
	font-weight: bold;
	color: ${colors.primary};
	opacity: 0.6;
	transition: opacity 0.3s ease;
	&:hover {
		opacity: 1;
	}
`;
