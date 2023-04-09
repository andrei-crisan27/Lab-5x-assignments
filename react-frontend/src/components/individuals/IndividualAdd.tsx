import {
	Autocomplete,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Individual } from "../../models/Individual";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { debounce } from "lodash";

export const IndividualAdd = () => {
	const navigate = useNavigate();

	const [individual, setIndividuals] = useState<Individual>({
		id: 1,
		firstname: "",
		lastname: "",
		nationality: "",
		age: 1,
		job: "", // TODO: also read the teacher_id from the form (NOT from the user!)
	});

	const addIndividual = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post(`${BACKEND_API_URL}/individuals/`, individual);
			navigate("/individuals");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/individuals`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={addIndividual}>
						<TextField
							id="firstname"
							label="First Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setIndividuals({ ...individual, firstname: event.target.value })}
						/>
						<TextField
							id="lastname"
							label="Last Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setIndividuals({ ...individual, lastname: event.target.value })}
						/>
						<TextField
							id="nationality"
							label="Nationality"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setIndividuals({ ...individual, nationality: event.target.value })}
						/>
						<TextField
							id="age"
							label="Age"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setIndividuals({ ...individual, age: parseInt(event.target.value) })}
						/>
						<TextField
							id="job"
							label="Job"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setIndividuals({ ...individual, job: event.target.value })}
						/>
						<Button type="submit">Add Individual</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
};
