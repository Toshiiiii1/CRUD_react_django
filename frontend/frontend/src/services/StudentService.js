import axios from "axios";

// getting a list of student
export function getStudents() {
	return (
		axios
			// send GET request to server
			.get("http://127.0.0.1:8000/students/")
			.then((response) => response.data)
	);
}

// deleting student
export function deleteStudent(studentId) {
	return axios
		.delete("http://127.0.0.1:8000/students/" + studentId + "/", {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
		.then((response) => response.data);
}

// adding student
export function addStudent(student) {
	return axios
		.post("http://127.0.0.1:8000/students/", student)
		.then((response) => response.data);
}

// updating student
export function updateStudent(stuid, student) {
	return axios
		.put("http://127.0.0.1:8000/students/" + stuid + "/", student)
		.then((response) => response.data);
}
