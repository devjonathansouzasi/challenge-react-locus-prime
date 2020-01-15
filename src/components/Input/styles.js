import { Input as unInput } from "@rocketseat/unform";
import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div`
	position: relative;
	display: flex;
	align-self: stretch;
	flex-direction: column;
	align-items: center;
	height: auto;
	margin-bottom: 10px;

	& span {
		align-self: flex-start;
		margin: 5px 0 8px;
		font-size: 0.8em;
		color: #fd5851;
	}

	& svg {
		position: absolute;
		top: 18px;
		left: 17px;
	}
`;

export const Field = styled(unInput)`
	width: 100%;
	height: 50px;
	padding-right: 12px;
	padding-left: ${props => (props.icon === 1 ? `42px` : `12px`)};
	border: none;
	border-radius: 4px;
	border: 2px solid
		${props => (props.selected ? colors.primary : colors.lightgray)};
	font-size: 0.8em;
	color: ${colors.primary};
	transition: border 0.2s ease;
	background-color: transparent;
	::placeholder {
		color: ${colors.gray};
	}

	:-ms-input-placeholder {
		color: ${colors.gray};
	}

	::-ms-input-placeholder {
		color: ${colors.gray};
	}
`;
