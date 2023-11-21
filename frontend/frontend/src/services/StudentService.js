import axios from "axios";

// getting a list of student
export function getStudents() {
	return axios
        // send GET request to server
		.get("http://127.0.0.1:8000/students/")
		.then((response) => response.data);
}
