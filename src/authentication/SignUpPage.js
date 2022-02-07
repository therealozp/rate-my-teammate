import React, { useState } from 'react';
import { Box } from '@mui/system';
import {
	TextField,
	Autocomplete,
	Typography,
	Chip,
	Button,
	IconButton,
	Avatar,
	Snackbar,
	Alert,
} from '@mui/material';
import { majors } from '../consts';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { MobileDatePicker } from '@mui/lab';
import ProfileDialog from '../user/ProfileDialog';

const SignUpFields = ({
	category,
	setActionState,
	currentActionState,
	customInput,
}) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
			<Typography sx={{ width: '120px' }}>{category}</Typography>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
				}}
			>
				{customInput ? (
					customInput
				) : (
					<TextField
						value={currentActionState}
						onChange={(event) => setActionState(event.target.value)}
						sx={{
							marginLeft: 'auto',
							marginRight: '20px',
						}}
					/>
				)}
			</Box>
		</Box>
	);
};

const Page = ({ index, currentValue, children }) => {
	return (
		<Box display={index === currentValue ? 'block' : 'none'}>{children}</Box>
	);
};
const SignUpPage = () => {
	const [name, setName] = useState('');
	const [school, setSchool] = useState('');
	const [DOB, setDOB] = useState(new Date());
	const [tagObjects, setTagObjects] = useState([]);
	const [imgSrc, setImgSrc] = useState('/yoimiya profile.jpeg');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	const totalPages = 3;
	const [activeValue, setActiveValue] = useState(1);
	const [disabled, setDisabled] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const onTagsChange = (event, value) => {
		setTagObjects(value);
	};

	return (
		<>
			<Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
				<Typography
					sx={{
						fontWeight: 'bold',
						fontSize: 30,
						fontFamily: 'Quicksand',
						margin: '16px 0',
					}}
				>
					Welcome to Bibi!
				</Typography>
				<Page index={1} currentValue={activeValue}>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: 20,
							fontFamily: 'Quicksand',
							margin: '16px 0',
						}}
					>
						Somethings about yourself
					</Typography>
					<Typography sx={{}}>What are you like?</Typography>
					<Box
						sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
					>
						<IconButton
							// className={classes.avatarButton}
							onClick={() => setDialogOpen(true)}
						>
							<Avatar
								style={{
									height: '200px',
									width: '200px',
									// border: '3pt solid lightgray',
								}}
								src={imgSrc}
								alt=""
								// variant="square"
							/>
						</IconButton>
					</Box>

					<SignUpFields
						currentActionState={name}
						setActionState={(newValue) => setName(newValue)}
						category="Name"
					/>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<SignUpFields
							customInput={
								<MobileDatePicker
									value={DOB}
									onChange={(newDOB) => {
										setDOB(newDOB);
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											sx={{
												marginLeft: 'auto',
												marginRight: '20px',
											}}
										/>
									)}
									inputFormat="dd/MM/yyyy"
								/>
							}
							currentActionState={DOB}
							category="Birthdate"
						/>
					</LocalizationProvider>
				</Page>
				<Page index={2} currentValue={activeValue}>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: 20,
							fontFamily: 'Quicksand',
							margin: '16px 0',
						}}
					>
						School Information
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							margin: '16px 0',
						}}
					>
						<Typography>Which school/university are you going to?</Typography>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<TextField
								value={school}
								onChange={(event) => setSchool(event.target.value)}
								sx={{
									margin: '16px 0 0 16px',
								}}
							/>
						</Box>
					</Box>
					<Box>
						<Typography>What are you interested in?</Typography>
						<Autocomplete //topics
							multiple
							options={majors}
							autoHighlight={true}
							id="tags-outlined"
							blurOnSelect="mouse"
							getOptionLabel={(option) => option.name}
							value={tagObjects}
							onChange={onTagsChange}
							limitTags={5}
							filterSelectedOptions
							renderInput={(params) => (
								<TextField
									{...params}
									variant="outlined"
									placeholder="Tags..."
									style={{
										width: '330px',
										// height: '235px',
										overflowY: 'auto',
										margin: '8px 0 0 16px',
									}}
								/>
							)}
							renderTags={(value, getTagProps) =>
								value.map((option, index) => (
									<Chip
										key={`chip${index}`}
										variant="outlined"
										sx={{
											border: '2px solid #407fc2',
											color: (theme) => theme.palette.secondary.main,
											margin: '4px',
										}}
										label={option.name}
										// onDelete={() => console.log('test')}
										{...getTagProps({ index })}
									/>
								))
							}
							renderOption={(props, option) => (
								<li {...props}>
									<Box
										component="span"
										sx={{
											width: 14,
											height: 14,
											mr: 1,
											mt: '2px',
										}}
									/>
									<Box>
										<Typography>{option.name}</Typography>
										<br />
									</Box>
								</li>
							)}
						/>
					</Box>
				</Page>
				<Page index={3} currentValue={activeValue}>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: 20,
							fontFamily: 'Quicksand',
							margin: '16px 0',
						}}
					>
						Finishing touches
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							margin: '16px 0',
						}}
					>
						<Typography>
							What do you want to be referred as? Feel free to type anything!
						</Typography>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<TextField
								value={username}
								onChange={(event) => setUsername(event.target.value)}
								sx={{
									margin: '16px 0 0 16px',
								}}
								placeholder="Username"
							/>
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							margin: '16px 0',
						}}
					>
						<Typography>How can members of Bibi contact you?</Typography>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<TextField
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								sx={{
									margin: '16px 0 0 16px',
								}}
								placeholder="Email"
							/>
						</Box>
					</Box>
				</Page>
				<Box
					sx={{
						width: '100%',
						position: 'absolute',
						display: 'flex',
						justifyContent: 'flex-end',
						bottom: 70,
						right: 30,
					}}
				>
					<Button
						variant="outlined"
						disabled={activeValue === 1}
						onClick={() => setActiveValue(activeValue - 1)}
						sx={{ marginRight: '16px' }}
					>
						Back
					</Button>
					{activeValue === totalPages ? (
						<Button variant="outlined">Submit</Button>
					) : (
						<Button
							variant="outlined"
							onClick={() => setActiveValue(activeValue + 1)}
						>
							Continue
						</Button>
					)}
				</Box>
			</Box>
			{/* <Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				autoHideDuration={3000}
				open={open}
				onClose={handleClose}
			>
				<Alert severity={alertType} onClose={handleClose}>
					{message}
				</Alert>
			</Snackbar> */}
			<ProfileDialog
				open={dialogOpen}
				handleClose={() => setDialogOpen(false)}
				currentImgSrc={imgSrc}
			/>
		</>
	);
};

export default SignUpPage;
