import React from 'react';
import MemberCard from '../profile/MemberCard';
// import TeamCard from './TeamCard';

const TeamsPage = ({ memberListID }) => {
	return (
		<div>
			<MemberCard
				name="Yoimiya"
				imageSrc="/yoimiya profile.jpeg"
				contacts="yoimbestgirl@gmail.com"
				role="Project Leader"
			/>
			{/* <MemberCard
				
			/> */}
		</div>
	);
};

export default TeamsPage;
