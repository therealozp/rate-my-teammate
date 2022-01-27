import React, { useState } from 'react';
import { Box } from '@mui/system';
import {
	TextField,
	FormControlLabel,
	Autocomplete,
	Typography,
	Chip,
	Button,
	IconButton,
	Avatar,
} from '@mui/material';
import { majors } from '../consts';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { MobileDatePicker } from '@mui/lab';
import { ChevronRight } from '@mui/icons-material';

const EditableBlocks = ({
	category,
	setActionState,
	currentActionState,
	currentActive,
	setActive,
	customInput,
}) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
			<Typography sx={{ width: '120px' }}>{category}</Typography>
			<Box
				sx={{
					alignItems: 'center',
					display: currentActive ? 'none' : 'flex',
				}}
			>
				<Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
					{currentActionState}
				</Typography>
				<Button
					variant="outlined"
					color="secondary"
					onClick={() => setActive(!currentActive)}
					sx={{
						textTransform: 'capitalize',
						left: 100,
					}}
				>
					edit
				</Button>
			</Box>
			<Box>
				<Box
					sx={{
						alignItems: 'center',
						display: currentActive ? 'flex' : 'none',
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

					<IconButton onClick={() => setActive(false)} sx={{ right: '8vw' }}>
						<ChevronRight />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

const UserEdit = ({
	currentName,
	currentSchool,
	currentTags,
	currentEmail,
	currentDOB,
	currentImgSrc,
}) => {
	const [name, setName] = useState(currentName);
	const [nameEditing, setNameEditing] = useState(false);

	const [school, setSchool] = useState(currentSchool);
	const [schoolEditing, setSchoolEditing] = useState(false);

	const [email, setEmail] = useState(currentEmail);
	const [DOB, setDOB] = useState(currentDOB);
	const [DOBEditing, setDOBEditing] = useState(false);

	// const [name, setName] = useState(currentName);
	const [tagObjects, setTagObjects] = useState(currentTags);

	const onTagsChange = (event, value) => {
		setTagObjects(value);
	};

	return (
		<Box sx={{ padding: '16px' }}>
			<Typography
				sx={{
					fontWeight: 'bold',
					fontSize: 30,
					fontFamily: 'Quicksand',
					margin: '16px 0',
				}}
			>
				Edit Profile
			</Typography>
			<Avatar
				sx={{ height: '200px', width: '200px', margin: '16px' }}
				src={currentImgSrc}
			/>
			<Typography
				sx={{
					fontWeight: 'bold',
					fontSize: 20,
					fontFamily: 'Quicksand',
					margin: '16px 0',
				}}
			>
				Personal Information
			</Typography>
			<EditableBlocks
				currentActive={nameEditing}
				currentActionState={name}
				setActive={(newValue) => setNameEditing(newValue)}
				setActionState={(newValue) => setName(newValue)}
				category="Name"
			/>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<EditableBlocks
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
					setActive={(newValue) => setDOBEditing(newValue)}
					currentActive={DOBEditing}
					category="Birthdate"
				/>
			</LocalizationProvider>
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
			<EditableBlocks
				currentActive={schoolEditing}
				currentActionState={school}
				setActive={(newValue) => setSchoolEditing(newValue)}
				setActionState={(newValue) => setSchool(newValue)}
				category="School"
			/>
			<Box>
				<Typography>Topics</Typography>
				<Autocomplete //topics
					multiple
					blurOnSelect="mouse"
					autoHighlight={true}
					id="tags-outlined"
					options={majors}
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
								width: '300px',
								height: '235px',
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
		</Box>
	);
};

export default UserEdit;
