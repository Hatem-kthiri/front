import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Teacher.css";
const Teacher = () => {
    const [teachers, setTeachers] = useState([
        {
            avatar: "https://radixtouch.com/templates/admin/smart/source/assets/img/std/std1.jpg",
            name: "Pooja Patel",
            subject: "Mathematics",
            email: "teacher@gmail.com",
            classToStudy: [{ name: "1s6" }, { name: "1S4" }],
        },
        {
            avatar: "https://radixtouch.com/templates/admin/smart/source/assets/img/std/std10.jpg",
            name: "Sarah Smith",
            subject: "French",
            email: "teacher@gmail.com",
            classToStudy: [{ name: "1s7" }, { name: "1S4" }],
        },
        {
            avatar: "https://radixtouch.com/templates/admin/smart/source/assets/img/std/std3.jpg",
            name: "John Deo",
            subject: "Science",
            email: "teacher@gmail.com",
            classToStudy: [{ name: "1s8" }, { name: "1S4" }],
        },
        {
            avatar: "https://radixtouch.com/templates/admin/smart/source/assets/img/std/std5.jpg",
            name: "Jacob Ryan",
            subject: "Phisical",
            email: "teacher@gmail.com",
            classToStudy: [{ name: "1s9" }, { name: "1S4" }],
        },
        {
            avatar: "https://radixtouch.com/templates/admin/smart/source/assets/img/std/std5.jpg",
            name: "Jacob Ryan",
            subject: "Phisical",
            email: "teacher@gmail.com",
            classToStudy: [
                { name: "1s2" },
                { name: "1S4" },
                { name: "2I3" },
                { name: "1s2" },
                { name: "1S4" },
                { name: "2I3" },
                { name: "1s2" },
                { name: "1S4" },
            ],
        },
    ]);

    const Card = ({ teacher }) => {
        const Teach_class = teacher.classToStudy.map((classe) => {
            return <span>{classe.name}</span>;
        });
        return (
            <div class="card">
                <div class="card-body">
                    <img
                        src={teacher.avatar}
                        class="teacher-pic"
                        alt="Teacher-Picture"
                    />
                    <div class="profile-usertitle">
                        <div class="teacher-name">{teacher.name}</div>
                        <div class="name-center"> {teacher.subject} </div>
                        <div>{teacher.email}</div>
                        <div class="teach-class">
                            Classes Teach : {Teach_class}
                        </div>
                    </div>

                    <div className="phone">
                        <p>
                            <i class="fa fa-phone"></i>
                            <a href="tel:(123) 456-7890"> (123) 456-7890</a>
                        </p>
                    </div>
                    <Button variant="danger">Read More</Button>
                </div>
            </div>
        );
    };

    return (
        <div className="teacher-view">
            {teachers.map((teacher, index) => {
                return <Card teacher={teacher} key={index} />;
            })}
        </div>
    );
};

export default Teacher;
