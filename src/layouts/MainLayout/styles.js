import styled from "styled-components";

import { colors } from "~/styles/constants";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 800px;
	height: 100vh;
	padding: 45px 20px 0;
	margin: 0 auto;
	background-color: ${colors.white};
`;
