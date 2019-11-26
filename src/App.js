import React from 'react';
import './App.css';
import styled from 'styled-components';
import Dashboard from './pages/Dashboard';

const StyledWrapper = styled.section`
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	display: grid;
	grid-template-columns: 60px 28% 1fr;
	grid-template-rows: 60px 1fr;

`;

function App() {
    return (	
        <div className="App">
			<StyledWrapper>
				<Dashboard />
			</StyledWrapper>
		</div>
    );
}

export default App;
