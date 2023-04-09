import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	CircularProgress,
	Container,
	IconButton,
	Tooltip,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Individual } from "../../models/Individual";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

export const AllIndividuals = () => {
	const [loading, setLoading] = useState(false);
	const [individuals, setIndividuals] = useState<Individual[]>([]);

	useEffect(() => {
		setLoading(true);
		fetch(`${BACKEND_API_URL}/individuals`)
			.then((response) => response.json())
			.then((data) => {
				setIndividuals(data);
				setLoading(false);
			});
	}, []);

	return (
		<Container>
			<h1>All individuals</h1>

			{loading && <CircularProgress />}
			{!loading && individuals.length === 0 && <p>No individuals found</p>}
			{!loading && (
				<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals/add`}>
					<Tooltip title="Add a new individual" arrow>
						<AddIcon color="primary" />
					</Tooltip>
				</IconButton>
			)}
			{!loading && individuals.length > 0 && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>#</TableCell>
								<TableCell align="right">First Name</TableCell>
								<TableCell align="right">Last Name</TableCell>
								<TableCell align="right">Nationality</TableCell>
                                <TableCell align="right">Age</TableCell>
								<TableCell align="right">Job</TableCell>
								<TableCell align="center">Operations</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{individuals.map((individual, index) => (
								<TableRow key={individual.id}>
									<TableCell component="th" scope="row">
										{index + 1}
									</TableCell>
									<TableCell component="th" scope="row">
										<Link to={`/individuals/${individual.id}/details`} title="View individual details">
											{individual.firstname}
										</Link>
									</TableCell>
									<TableCell align="right">{individual.lastname}</TableCell>
                                    <TableCell align="right">{individual.nationality}</TableCell>
                                    <TableCell align="right">{individual.age}</TableCell>
                                    <TableCell align="right">{individual.job}</TableCell>
									<TableCell align="right">
										<IconButton
											component={Link}
											sx={{ mr: 3 }}
											to={`/individuals/${individual.id}/details`}>
											<Tooltip title="View individual details" arrow>
												<ReadMoreIcon color="primary" />
											</Tooltip>
										</IconButton>

										<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals/${individual.id}/edit`}>
											<EditIcon />
										</IconButton>

										<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals/${individual.id}/delete`}>
											<DeleteForeverIcon sx={{ color: "red" }} />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Container>
	);
};

export default AllIndividuals;