import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getStudents, deleteStudent } from "../services/StudentService";
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";

const Manage = () => {
	const [students, setStudents] = useState([]);
	const [addModalShow, setAddModalShow] = useState(false); // show add form or not
	const [editModalShow, setEditModalShow] = useState(false); // show edit form or not
	const [editStudent, setEditStudent] = useState({}); //
	const [isUpdated, setIsUpdated] = useState(false);

	useEffect(() => {
		getStudents().then((data) => {
			setStudents(data);
			setIsUpdated(false);
		});
	}, []);

    // ham
    const load = (studentId, newStudent) => {
        setStudents((data) => data.map(stu => {
            if (stu.studentId === studentId) {
                return newStudent;
            }
            return stu;
        }));
    };

	const handleUpdate = (e, stu) => {
		e.preventDefault();
		setEditModalShow(true);
		setEditStudent(stu);
	};

	const handleAdd = (e) => {
		e.preventDefault();
		setAddModalShow(true);
	};

	const handleDelete = (e, studentId) => {
		if (window.confirm("Are you sure ?")) {
			e.preventDefault();
			deleteStudent(studentId).then(
				(result) => {
					alert(result);
					setIsUpdated(true);
				},
				(error) => {
					alert("Failed to Delete Student");
				}
			);
		}
	};

	let AddModelClose = () => setAddModalShow(false);
	let EditModelClose = () => setEditModalShow(false);

	return (
		<div className="container-fluid side-container">
			<div className="row side-row">
				<p id="manage"></p>
				<Table
					striped
					bordered
					hover
					className="react-bootstrap-table"
					id="dataTable"
				>
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Registration No</th>
							<th>Email</th>
							<th>Course</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{students.map((stu) => (
							<tr key={stu.studentId}>
								<td>{stu.studentId}</td>
								<td>{stu.FirstName}</td>
								<td>{stu.LastName}</td>
								<td>{stu.RegistrationNo}</td>
								<td>{stu.Email}</td>
								<td>{stu.Course}</td>
								<td>
									<Button
										className="mr-2"
										variant="danger"
										onClick={(event) =>
											handleDelete(event, stu.studentId)
										}
									>
										<RiDeleteBin5Line />
									</Button>
									<span>&nbsp;&nbsp;&nbsp;</span>
									<Button
										className="mr-2"
										onClick={(event) =>
											handleUpdate(event, stu)
										}
									>
										<FaEdit />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
                
                {/* update form */}
				<UpdateStudentModal
					show={editModalShow}
					student={editStudent}
					setUpdated={setIsUpdated}
					onHide={EditModelClose}
                    onUpdate={load}
				></UpdateStudentModal>

				<ButtonToolbar>
					<Button variant="primary" onClick={handleAdd}>
						Add Student
					</Button>
					<AddStudentModal
						show={addModalShow}
						setUpdated={setIsUpdated}
						onHide={AddModelClose}
					></AddStudentModal>
				</ButtonToolbar>
			</div>
		</div>
	);
};

export default Manage;
