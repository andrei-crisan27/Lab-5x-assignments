import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Individual } from "../../models/Individual";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CourseDetails = () => {
	const { individualId } = useParams();
	const [individual, setIndividuals] = useState<Individual>();

	useEffect(() => {
		const fetchCourse = async () => {
			// TODO: use axios instead of fetch
			// TODO: handle errors
			// TODO: handle loading state
			const response = await fetch(`${BACKEND_API_URL}/individuals/${individualId}`);
			const individual = await response.json();
			setIndividuals(individual);
		};
		fetchCourse();
	}, [individualId]);

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h1>Individuals Details</h1>
					<p>First Name: {individual?.firstname}</p>
					<p>Last Name: {individual?.lastname}</p>
					<p>Nationality: {individual?.nationality}</p>
                    <p>Age: {individual?.age}</p>
					<p>Job: {individual?.job}</p>
				</CardContent>
				<CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals/${individualId}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals/${individualId}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
};
