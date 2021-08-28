import Calendar from "react-awesome-calendar";
import "./Exam.css";
const Exam = () => {
    const events = [
        {
            id: 1,
            color: "",
            from: "",
            to: "",
            title: "This is an event",
        },
        {
            id: 3,
            color: "",
            from: "",
            to: "",
            title: "",
        },
    ];
    return (
        <div className="calendar">
            <Calendar events={events} />
        </div>
    );
};

export default Exam;
