import React, { useState } from 'react';
import ProfileComponent from './ProfileComponent';
import HomeLayout from '../layout/HomeLayout';
import Deck from './Deck';
import ProfileDrawer, { ProfileDrawerButton } from './ProfileDrawer';

const userlist = [
	{
		name: 'Yoimiya 1',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 2',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 3',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 4',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 5',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 6',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 7',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
	{
		name: 'Yoimiya 8',
		imageURL: '/yoimiya profile.jpeg',
		school: 'RMIT',
	},
];

const ProfilePage = () => {
	const [index, setIndex] = useState(userlist.length - 1);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [activeList, setActiveList] = useState(userlist);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};
	const removeItem = (arr, index) => {
		if (activeList.length > 0) {
			setActiveList(arr.filter((item) => item !== arr[index]));
		} else {
			// query more people
		}
	};
	return (
		<HomeLayout>
			<ProfileDrawer
				open={drawerOpen}
				handleClose={() => setDrawerOpen(false)}
				name={activeList[index].name}
			/>
			<div
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
			</div>
			<ProfileDrawerButton onClick={() => setDrawerOpen(!drawerOpen)} />
		</HomeLayout>
	);
};

export default ProfilePage;
