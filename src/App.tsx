import React, { useCallback, useEffect, useState } from 'react';
import Display from './components/Display';
import styled from 'styled-components';
import Button from './components/Button';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items
	gap: 1rem;
`;

const App: React.FC = () => {
	const [date, setDate] = useState<string>('');

	useEffect(() => {
		setCurrentDate();
	}, []);

	const getCurrentDate = useCallback(() => {
		const currentDate = new Date();
		const [seconds, minutes, hours, day, month, year] = [
			currentDate.getSeconds().toString().padStart(2, '0'),
			currentDate.getMinutes().toString().padStart(2, '0'),
			currentDate.getHours().toString().padStart(2, '0'),
			currentDate.getDate(),
			currentDate.getMonth() + 1,
			currentDate.getFullYear(),
		];
		return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
	}, []);

	const setCurrentDate = useCallback(() => {
		setDate(getCurrentDate());
	}, []);

	return (
		<Wrapper>
			<Display date={date} />
			<Button refresh={setCurrentDate} />
		</Wrapper>
	);
};

export default App;
