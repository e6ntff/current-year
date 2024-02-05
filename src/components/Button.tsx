import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: #000;
	font-size: 3rem;
	border: 0.25rem solid #000;
	border-radius: 1rem;
	text-transform: uppercase;
	padding: 1rem;
	font-weight: 700;
	cursor: pointer;
	transition: 0.15s;

	&:hover {
		background: #aaa;
	}

	background: #ccc;
`;

interface Props {
	refresh: () => void;
}

const Button: React.FC<Props> = ({ refresh }) => {
	return <StyledButton onClick={refresh}>update</StyledButton>;
};

export default Button;
