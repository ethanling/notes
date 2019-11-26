import React from 'react';
import styled from 'styled-components';


const Editor = () => {

	const StyledEditor = styled.section`
		grid-column: 3 / 4;
		grid-row: 2;
		background-color: #f1f1f1;
		flex: 1;
		z-index: 0;
	`;
	
	const StyledTextArea = styled.textarea`
		
	`;

	return (
		<StyledEditor>
			<StyledTextArea></StyledTextArea>
		</StyledEditor>
	)
}

export default Editor
