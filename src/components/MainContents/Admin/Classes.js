import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import "./Classes.css";
const Classes = () => {
    //Hooks For All Classes List
    const [studentsclass, setStudentsClass] = useState([]);

    const [newClass, setNewClass] = useState();
    const [show, setShow] = useState(false);

    // Function Axios Get All Classes
    /************************************/
    const getAllClass = async () => {
        const Classes = await axios.get(
            "http://localhost:5000/administration/GetAllClass"
        );
        setStudentsClass(Classes.data.data);
    };
    /*************************************/

    // UseEffect for Get Classes
    /*******************/
    useEffect(() => {
        getAllClass();
    }, []);
    /*******************/

    // Modal & Create Class Settings
    //****************************************/
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Submit => Create New class
    const handleSubmit = (e) => {
        e.preventDefault();
        setStudentsClass([...studentsclass, newClass]);
        axios
            .post("http://localhost:5000/administration/createclass", {
                name: newClass.name,
            })
            .then((res) => {
                console.log("Status: ", res.status);
                console.log("Data: ", res.data);
            })
            .catch((err) => {
                console.log("Error in Create Class!", err);
            });

        setShow(false);
    };
    //****************************************/

    //Map All Classes
    //***********************************************/
    const Affichage = studentsclass.map((classe) => {
        return <span>{classe.name}</span>;
    });
    //***********************************************/

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Class
            </Button>
            <div className="classes">
                {studentsclass.length === 0 ? (
                    <div className="Class-content">
                        <h1 className="no-class">
                            You Don't Have Any Class Yet ...
                        </h1>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                ) : (
                    <div className="affichage-class">{Affichage}</div>
                )}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Class</Modal.Title>
                    </Modal.Header>

                    <Form.Control
                        style={{ margin: "20px 0 20px 38px" }}
                        type="text"
                        name="name"
                        placeholder="Enter Name of Class .. "
                        onChange={(e) =>
                            setNewClass({
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default Classes;
