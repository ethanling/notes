import React from 'react';
import styled from 'styled-components';

const Sidebar = (props) => {

    const StyledSidebar = styled.aside`
		background-color: #1d1d1d;
		grid-column: 2;
		grid-row: 2;
        flex: 1;
		${props.toggle ? "transform: scale(0);" : "transform: scale(1);"}
		transition: transform .3s ease;
		z-index: 1;
	`;
	
	return (
		<StyledSidebar>
			{props.toggle ? 'true' : 'false'}
		</StyledSidebar>
	)
}

export default Sidebar;
