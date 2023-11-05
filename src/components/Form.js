import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [rollNumber, setRollNumber] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log("First Name:", firstName);
		console.log("Last Name:", lastName);
		console.log("Roll Number:", rollNumber);

		// Clear the form fields
		setFirstName("");
		setLastName("");
		setRollNumber("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<TextField
							label="First Name"
							variant="outlined"
							fullWidth
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Last Name"
							variant="outlined"
							fullWidth
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Roll Number"
							variant="outlined"
							fullWidth
							type="number"
							value={rollNumber}
							onChange={e => setRollNumber(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}

export default Form;
