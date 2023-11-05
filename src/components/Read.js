import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Checkbox,
	Button
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchApiData } from "../redux/crudSlice";

const Read = () => {
	const dispatch = useDispatch();
	const [selectedRow, setSelectedRow] = useState(null);

	const read = useSelector(state => state.crud.read?.data);
	const loading = useSelector(state => state.crud.read.loading);
	// const error = useSelector(state => state.crud.read.error);

	const handleRowSelect = id => {
		if (selectedRow === id) {
			setSelectedRow(null);
		} else {
			setSelectedRow(id);
		}
	};

	const handlePrintData = () => {
		if (selectedRow !== null) {
			const selectedData = read.find(item => item.sid === selectedRow);
			console.log(selectedData); // You can replace this with your printing logic
		}
	};

	console.log("Akram Read: ", read);

	useEffect(() => {
		dispatch(
			fetchApiData({
				apiName: "read",
				endpoint: "http://localhost:8080/CRUDApplication/read"
			})
		);
	}, [dispatch]);

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<div>
			<div>
				<Button
					variant="contained"
					onClick={handlePrintData}
					disabled={selectedRow === null}
				>
					Print Selected Row
				</Button>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>Student ID</TableCell>
								<TableCell>First Name</TableCell>
								<TableCell>Last Name</TableCell>
								<TableCell>Roll no.</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{read?.map(row => (
								<TableRow
									key={row.sid}
									hover
									onClick={() => handleRowSelect(row.sid)}
								>
									<TableCell padding="checkbox">
										<Checkbox checked={selectedRow === row.sid} />
									</TableCell>
									<TableCell>{row.sid}</TableCell>
									<TableCell>{row.firstName}</TableCell>
									<TableCell>{row.lastName}</TableCell>
									<TableCell>{row.rollNumber}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default Read;
