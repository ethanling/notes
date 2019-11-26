import React from 'react';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi'

const MenuButton = (props) => {
	const StyledMenuButton = styled.button`
		color: #f1f1f1;
		outline: none;
		border: none;
		padding: 10px;
	`;
	
	return (
		<StyledMenuButton onClick={() => props.action()}>
			<FiSettings size={'20px'} />
		</StyledMenuButton>
	)
}

export default MenuButton;
