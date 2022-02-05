import React, { useState } from 'react';
import ProfileComponent from './ProfileComponent';
import HomeLayout from '../layout/HomeLayout';
import Deck from './Deck';
import ProfileDrawer, { ProfileDrawerButton } from './ProfileDrawer';
import { Box } from '@mui/system';

const userlist = [
	{
		name: 'Yoimiya 1',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 2',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 3',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 4',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 5',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 6',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 7',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
	{
		name: 'Yoimiya 8',
		bio: 'A pyromaniac who loves studying explosions and fireworks!',
		school: 'RMIT University',
		DOB: '09/10/2004',
		displaySubjects: ['Computer Sciences', 'Physics'],
		drawerSubjects: [
			'Computer Science',
			'Physics',
			'Discrete Maths',
			'Literature',
		],
		email: 'yoimbestgirl@gmail.com',
		imageURL: '/yoimiya profile.jpeg',
	},
];

const ProfilePage = () => {
	const [index, setIndex] = useState(userlist.length - 1);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [activeList, setActiveList] = useState(userlist);

	// const handleDrawerToggle = () => {
	// 	setDrawerOpen(!drawerOpen);
	// };

	const removeItem = (arr, index) => {
		if (activeList.length > 0) {
			setActiveList(arr.filter((item) => item !== arr[index]));
		} else {
			// query more people
		}
	};
	return (
		<HomeLayout>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '80vh',
				}}
			>
				<Deck
					setCurrentActive={(value) => setIndex(value)}
					removeItemAtIndex={(value) => removeItem(activeList, value)}
					activeList={activeList}
				/>
			</Box>
			<ProfileDrawer
				open={drawerOpen}
				handleClose={() => setDrawerOpen(false)}
				user={activeList[index]}
			/>
			<ProfileDrawerButton onClick={() => setDrawerOpen(!drawerOpen)} />
			<Box sx={{ height: '13vh' }} />
		</HomeLayout>
	);
};

export default ProfilePage;
