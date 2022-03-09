import React from 'react';
import Sidebar from '../components/Sidebar';
import { Grid, GridItem } from '@chakra-ui/react';

const Content = () => {
	return <>Content</>;
};

export default function Dashboard() {
	return (
		<>
			<Grid templateColumns="250px calc(100% - 250px)">
				<GridItem w="100%" rowSpan={4} colSpan={1}>
					<Sidebar />
				</GridItem>
				<GridItem>
					<Content />
				</GridItem>
			</Grid>
		</>
	);
}
