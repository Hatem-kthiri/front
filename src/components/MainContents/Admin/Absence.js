import { Table } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";

import { useState } from "react";
import "./Absence.css";
const Absence = () => {
    const data = {
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
                label: "Teacher",
                field: "Teacher",
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
                label: "Situation",
                field: "situation",
                sort: "disabled",
                width: 100,
            },
        ],
        rows: [
            {
                photo: (
                    <img
                        src="https://radixtouch.com/templates/admin/smart/source/assets/img/std/std1.jpg"
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                    />
                ),
                firstname: "Hatem",
                lastname: "Kthiri",
                Teacher: "Teacher",
                class: "1S2",
                situation: "Absente",
            },
        ],
    };

    return (
        <>
            <div className="Absence">
                <div class="card-absence">
                    <header>All Students Absence </header>
                </div>
                <MDBDataTable
                    entriesOptions={[10, 20, 30]}
                    entries={10}
                    hover
                    data={data}
                />
            </div>
        </>
    );
};

export default Absence;
