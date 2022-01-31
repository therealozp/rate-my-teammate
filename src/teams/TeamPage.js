import React from 'react';
import MemberCard from '../profile/MemberCard';

const TeamPage = () => {
	return (
		<div>
			<MemberCard
				name="Yoimiya"
				imageSrc="/yoimiya profile.jpeg"
				contacts="yoimbestgirl@gmail.com"
				role="Project Leader"
			/>
		</div>
	);
};

export default TeamPage;
