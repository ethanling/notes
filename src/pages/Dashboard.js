import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Components
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Tools from '../components/Tools';
import Editor from '../components/Editor';
// Hooks 
import useWindowDimensions from '../hooks/useWindowDimensions';
import useToggleSidebar from '../hooks/useSidebarToggle'

const Dashboard = () => {
	const [toggle, setToggle] = useState(true);
	const { height, width } = useWindowDimensions();
	
	const StyledDashboard = styled.section`
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		display: ${width < 800 ? ('flex') : ('grid')};
		grid-template-columns: 60px 28% 1fr;
		grid-template-rows: 60px 1fr; 
		justify-conter: center;
		flex-direction: column;
	`;

	const handleToggle = () => {
        console.log('togggle');
        const toggled = !toggle;
		setToggle(toggled);
	}


	return (
		<StyledDashboard>
			<Nav handleToggle={handleToggle} />
			<Tools width={width} toggle={toggle} />
			<Sidebar width={width} toggle={toggle} />
			<Editor />
		</StyledDashboard>
	)
}

export default Dashboard;
