import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton'


const Nav = (props) => {
		
	const StyledNav = styled.div`
		grid-column-start: 1;
		grid-column-end: 4;
		grid=-row: 1;
		background-color: #16181d;
		border-bottom: 2px solid #000;
		color: #f1f1f1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #f1f1f1;
		padding: 10px;
	`;

	const StyledLogo = styled.div`
		flex: 1;
		display: flex;
		justify-content: left;
		align-items: center;	
		font-weight: bold;
	`;
		
	return (
		<StyledNav>
			<StyledLogo>
				Notes
			</StyledLogo>
			<MenuButton text={'Toggle'} action={props.handleToggle} />
		</StyledNav>
	)
}

export default Nav;
