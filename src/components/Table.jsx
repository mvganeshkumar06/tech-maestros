import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
export default function List({ data }) {
	return (
		<Table variant="simple">
			<Thead>
				<Tr>
					<Th>Name</Th>
					<Th>Action</Th>
				</Tr>
			</Thead>
			<Tbody>
				{data &&
					data.map((el) => {
						return (
							<Tr key={el._id}>
								<Td>{el['name']}</Td>
								<Td>
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
