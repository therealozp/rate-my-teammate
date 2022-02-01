import React from 'react';
import MemberCard from '../profile/MemberCard';
import TeamCard from './TeamCard';

const TeamsPage = () => {
	return (
		<div>
			<TeamCard
				name="Bibi"
				imageSrc="/yoimiya profile.jpeg"
				contacts="yoimbestgirl@gmail.com"
				role="Project Leader"
				timePeriod="Aug 2018 - Sep 2019"
				desc="A rate-my-teammate app to help make better teams"
			/>
			{/* <MemberCard
				
			/> */}
		</div>
	);
};

export default TeamsPage;
