import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Student.css";
const Student = () => {
    //Hooks For All Students List
    const [allStudents, setAllStudents] = useState([]);

    //Hooks For All Classes List
    const [studentsclass, setStudentsClass] = useState({ classes: [] });

    //Hooks For Adding Class to Student
    const [addClass, setAddClass] = useState();

    // Hooks For Edit Modal
    /*************************************/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Function Axios Get All Classes
    /************************************/
    const getAllClass = async () => {
        const Classes = await axios.get(
            "http://localhost:5000/administration/GetAllClass"
        );
        setStudentsClass({ classes: Classes.data.data });
    };
    /*************************************/

    // Function Axios Get All Students
    /*************************************/
    const getAllStudents = async () => {
        const Students = await axios.get(
            "http://localhost:5000/administation/AllStudents"
        );
        setAllStudents(Students.data.data);
    };
    /*************************************/
    const history = useHistory();
    useEffect(() => {
        getAllStudents();
        getAllClass();
    }, []);
    const handleSave = (e) => {
        e.preventDefault();
        console.log(addClass);
        console.log(e.target.value);
        const id = e.target.value;
        // setStudentsClass([...allStudents, newClass]);
        axios
            .put(`http://localhost:5000/administration/updateClass/${id}`, {
                classRoom: addClass,
            })
            .then((res) => {
                console.log("Status: ", res.status);
                console.log("Data: ", res.data);
                history.go(0);
            })
            .catch((err) => {
                console.log("Error in adding class !", err);
            });
        setShow(false);
    };
    /*************************************/
    // Map All Classes Array
    /**********************************************/

    const classes = studentsclass.classes.map((classe, index) => {
        return (
            <option key={index} value={classe.name}>
                {classe.name}
            </option>
        );
    });

    /**********************************************/

    // AllStudents Array Map To Shows In DataTable
    /**********************************************/
    const data_table = allStudents.map((student, index) => {
        const firstName = student.firstName;
        const lastName = student.lastName;
        const age = student.age;
        const parentsPhone = student.parentsPhone;
        const classRoom = student.classRoom;
        const Data = {
            photo: (
                <img
                    src={student.avatar}
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "50%" }}
                />
            ),
            firstname: firstName,
            lastname: lastName,
            age: age,
            parentphone: parentsPhone,
            class: classRoom === "" ? "Without Class " : classRoom,
            option: (
                <div>
                    {show ? (
                        <div
                            key={index}
                            style={{
                                width: "90px",
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <Form.Select
                                style={{ width: "80px", marginRight: "5px" }}
                                aria-label="Default select example"
                                onChange={(e) => setAddClass(e.target.value)}
                            >
                                <option>
                                    {classRoom === ""
                                        ? "Without Class "
                                        : classRoom}
                                </option>
                                {classes}
                            </Form.Select>
                            <button
                                value={student._id}
                                variant="primary"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "90px",
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <button onClick={handleShow}>
                                <i class="fas fa-edit"></i>
                            </button>
                            <button>
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    )}
                </div>
            ),
        };

        return Data;
    });
    const rows = data_table;

    const DataTable = {
        columns: [
            {
                label: "Photo",
                field: "photo",
                sort: "disabled",
            },
            {
                label: "First Name",
                field: "firstname",
                sort: "disabled",
                width: 150,
            },
            {
                label: "Last Name",
                field: "lastname",
                sort: "disabled",
                width: 270,
            },
            {
                label: "Age",
                field: "age",
                sort: "disabled",
                width: 100,
            },
            {
                label: "Parents Phone",
                field: "parentphone",
                sort: "disabled",
                width: 100,
            },
            {
                label: "Student Class",
                field: "class",
                sort: "disabled",
                width: 100,
            },
            {
                label: "Option",
                field: "option",
                sort: "disabled",
                width: 100,
            },
        ],
        rows,
    };
    /**********************************************/

    return (
        <>
            <div className="students">
                <div className="card-head">
                    <header>All Students List</header>
                </div>
                {/* Component DataTable */}

                <MDBDataTable
                    entriesOptions={[10, 20, 30]}
                    entries={10}
                    hover
                    data={DataTable}
                />
            </div>
        </>
    );
};

export default Student;
