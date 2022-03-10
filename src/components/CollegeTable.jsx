import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
export default function List({ data }) {
	console.log(data);
	return (
		<Table variant="simple">
			<Thead>
				<Tr>
					<Th>Code</Th>
					<Th>Name</Th>
					<Th textAlign={'right'}>Action</Th>
				</Tr>
			</Thead>
			<Tbody>
				{data &&
					data.map((el) => {
						return (
							<Tr key={el._id}>
								<Td>{el['code']}</Td>
								<Td>{el['name']}</Td>
								<Td textAlign={'right'}>
									<Button colorScheme="purple" size="sm">
										View
									</Button>
								</Td>
							</Tr>
						);
					})}
			</Tbody>
		</Table>
	);
}
