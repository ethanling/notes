import React from 'react';
import styled from 'styled-components';

const Sidebar = (props) => {

	const StyledSidebar = styled.aside`
		background-color: #1d1d1d;
		grid-column: 2;
		grid-row: 2;
		${props.toggle ? ('height: 0') : ('height: 100vh;')}
		transition: all .3s ease;
		z-indedx. 1;
	`;
	
	return (
		<StyledSidebar>
			Sidebar
		</StyledSidebar>
	)
}

export default Sidebar;
