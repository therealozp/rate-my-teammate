import React from 'react';
import InviteCard from './InviteCard';

const InvitesPage = ({ inviteList }) => {
	return (
		<div>
			{inviteList.map((d, i) => (
				<InviteCard
					sender={d.sender}
					name={d.name}
					imageSrc={d.teamPhotoURL}
					members={d.members}
					sentAt={d.sent}
					key={`teamcard${i}`}
				/>
			))}

			{/* <MemberCard
				
			/> */}
		</div>
	);
};

export default InvitesPage;
