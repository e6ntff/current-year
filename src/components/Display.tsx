import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
	color: #000;
	font-size: 5rem;
	font-family: sans-serif;
	padding: 1rem;
	font-weight: 700;
	cursor: pointer;
`;

interface Props {
	date: string;
}

const Display: React.FC<Props> = ({ date }) => {
	return <Screen>{date}</Screen>;
};

export default Display;
