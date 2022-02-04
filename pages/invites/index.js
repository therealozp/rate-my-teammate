import React from 'react';
import InvitesPage from '../../src/invite/InvitesPage';
import HomeLayout from '../../src/layout/HomeLayout';

const index = ({ inviteList }) => {
	return (
		<HomeLayout>
			<InvitesPage inviteList={inviteList} />
		</HomeLayout>
	);
};

export default index;

export function getServerSideProps({ res }) {
	return {
		props: {
			inviteList: res.inviteList,
		},
	};
}
