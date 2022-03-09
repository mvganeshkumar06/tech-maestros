import React from 'react';
import { Wrap, WrapItem, Avatar } from '@chakra-ui/react';
function JobListItem() {
	return (
		<div>
			<div className="job-col-1">
				<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
			</div>
			<div className="job-col-2"></div>
		</div>
	);
}

export default JobListItem;
