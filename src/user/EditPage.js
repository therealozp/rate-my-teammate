import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import UserEdit from './UserEdit';

const EditPage = () => {
	return (
		<HomeLayout>
			<UserEdit
				currentName="Yoimiya"
				currentSchool="RMIT"
				currentTags={[
					{
						department: 'Media',
						isMajor: true,
						name: 'Media Studies',
					},
					{
						department: 'Music',
						isMajor: false,
						name: 'Music',
					},
				]}
				currentDOB={'09/10/2004'}
				currentImgSrc={'/yoimiya profile.jpeg'}
			/>
		</HomeLayout>
	);
};

export default EditPage;
