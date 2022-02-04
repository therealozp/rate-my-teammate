import React from 'react';
import InviteCard from './InviteCard';

const InvitesPage = () => {
	const inviteList = [
		{
			sender: 'hanthang',
			name: 'Dacct',
			members: [
				'hanthang',
				'cuongchuck',
				'ozymandio',
				'Catou',
				'newboy12',
				'completeboy12',
			],
			sent: new Date(),
			teamPhotoURL: '/yoimiya profile.jpeg',
		},
		{
			sender: 'hanthang',
			name: 'Dacct',
			members: [
				'hanthang',
				'cuongchuck',
				'ozymandio',
				'Catou',
				'newboy12',
				'completeboy12',
			],
			sent: new Date(),
			teamPhotoURL: '/yoimiya profile.jpeg',
		},
		{
			sender: 'hanthang',
			name: 'Dacct',
			members: [
				'hanthang',
				'cuongchuck',
				'ozymandio',
				'Catou',
				'newboy12',
				'completeboy12',
			],
			sent: new Date(),
			teamPhotoURL: '/yoimiya profile.jpeg',
		},
	];
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
