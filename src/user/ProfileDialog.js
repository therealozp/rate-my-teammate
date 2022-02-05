import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import {
	Typography,
	Button,
	Snackbar,
	IconButton,
	Avatar,
	Tooltip,
	Dialog,
	Alert,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function ProfileDialog({
	// user,
	setDialogOpen,
	setcurrentImgSrc,
	currentImgSrc,
	open,
	handleClose,
}) {
	const [previewPicture, setPreviewPicture] = useState();
	const [picture, setPicture] = useState(null);

	const [allowSubmit, setAllowSubmit] = useState(true);
	const [toastOpen, setToastOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [severity, setSeverity] = useState('info');
	const sendToastMsg = (msg, sev) => {
		setToastMessage(msg);
		setSeverity(sev);
		setToastOpen(true);
	};

	// const uploadImage = async () => {
	// 	const imageBody = new FormData();
	// 	imageBody.append('file', picture);

	// 	const response = await axios({
	// 		method: 'post',
	// 		url: publicRuntimeConfig.baseUrl + '/upload',
	// 		data: imageBody,
	// 		headers: { 'Content-Type': 'multipart/form-data' },
	// 	});

	// 	return response;
	// };

	// const submitProfileID = async (fileID) => {
	// 	const successMsg = 'Successfully updated your profile photo!';
	// 	const variables = {
	// 		_id: user._id,
	// 		name,
	// 		bio,
	// 		tags,
	// 		profileImageID: fileID,
	// 		coverImageID: '',
	// 		email,
	// 	};
	// 	const { data } = await updateUser({
	// 		variables,
	// 	});
	// 	console.log('data: ', data.updateUser);
	// 	sendToastMsg(successMsg, 'success');
	// };

	// const handleSubmitProfilePic = async (event) => {
	// 	event.preventDefault();
	// 	sendToastMsg('Submitting...', 'info');
	// 	setAllowSubmit(false);

	// 	const successMsg = 'Successfully updated your profile!';
	// 	const errorMsg = 'There was an error updating your profile: ';

	// 	try {
	// 		const response = await uploadImage();
	// 		if (response.status === 200) {
	// 			const { fileID } = response.data;
	// 			console.log('fileID: ', fileID);
	// 			await submitProfileID(fileID);
	// 			setcurrentImgSrc(fileID);
	// 		}
	// 		sendToastMsg(successMsg, 'success');
	// 		setDialogOpen(false);
	// 	} catch (err) {
	// 		setAllowSubmit(true);
	// 		sendToastMsg(errorMsg + err, 'error');
	// 		console.log(err);
	// 	}
	// };

	useEffect(() => {
		if (!picture) {
			setPreviewPicture(undefined);
			return false;
		}

		const objectUrl = URL.createObjectURL(picture);
		setPreviewPicture(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [picture]);

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					sx: {
						width: '80vw',
					},
				}}
			>
				<DialogTitle>Update Profile Photo</DialogTitle>
				<DialogContent>
					<form>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Box sx={{ marginBottom: '1rem' }}>
								<input
									type="file"
									accept="image/*"
									onChange={(e) => setPicture(e.target.files[0])}
									id="project-profile-ID"
									style={{ display: 'none' }}
								/>
								<label htmlFor="project-profile-ID">
									<Tooltip title="click to add" placement="top">
										<Avatar
											sx={{
												height: '20vh',
												width: '20vh',
												border: '3pt solid lightgray',
												zIndex: 4,
												cursor: 'pointer',
												'&:hover': {
													filter: `brightness(${90}%)`,
												},
											}}
											src={previewPicture ? previewPicture : currentImgSrc}
											alt=""
										>
											<IconButton
												color="primary"
												aria-label="upload picture"
												component="span"
												sx={{
													position: 'absolute',
													zIndex: 100,
													top: 0,
													bottom: 0,
													height: '100%',
													width: '100%',
												}}
											>
												<AddIcon />
											</IconButton>
										</Avatar>
									</Tooltip>
								</label>
							</Box>
						</Box>
					</form>
				</DialogContent>
				<DialogActions>
					<Button
						type="submit"
						variant="outlined"
						color="secondary"
						disabled={!allowSubmit}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				autoHideDuration={3000}
				open={toastOpen}
				onClose={() => setToastOpen(false)}
				key={'topcenter'}
				severity={severity}
			>
				<Alert severity={severity}>{toastMessage}</Alert>
			</Snackbar>
		</>
	);
}

export default ProfileDialog;
