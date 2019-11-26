import React from 'react';
import styled from 'styled-components';


const Tools = (props) => {
	
	const StyledTools = styled.aside`
		grid-row: 2 / 3;
		grid-column: 1;
		background-color: #000000;
		display: ${props.width < 800 ? 'none' : 'block'}
	`;
		
	return (
		<StyledTools>
			Tools
		</StyledTools>
	)
}

export default Tools;
