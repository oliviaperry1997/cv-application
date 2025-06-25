import { useState } from "react";
import Person from "./Person.jsx";
import School from "./School.jsx";
import Job from "./Job.jsx";

function Cv() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [person, setPerson] = useState({
        fullName: " ",
        dateOfBirth: "",
        email: "",
        phone: "",
    });

    const [school, setSchool] = useState({
        schoolName: "",
        studyTitle: "",
        studyStartDate: "",
        studyEndDate: "",
    });

    const [job, setJob] = useState({
        companyName: "",
        jobTitle: "",
        jobDesc: "",
        jobStartDate: "",
        jobEndDate: "",
    });

    const [isEditingPerson, setIsEditingPerson] = useState(false);
    const [isEditingSchool, setIsEditingSchool] = useState(false);
    const [isEditingJob, setIsEditingJob] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        setIsEditingPerson(false);
        setIsEditingSchool(false);
        setIsEditingJob(false);
    };

    const anyComponentEditing =
        isEditingPerson || isEditingSchool || isEditingJob;

    return (
        <>
            <h1>CV Application</h1>
            <Person
                person={person}
                setPerson={setPerson}
                isSubmitted={isSubmitted}
                isEditing={isEditingPerson}
                setIsEditing={setIsEditingPerson}
            />
            <School
                school={school}
                setSchool={setSchool}
                isSubmitted={isSubmitted}
                isEditing={isEditingSchool}
                setIsEditing={setIsEditingSchool}
            />
            <Job
                job={job}
                setJob={setJob}
                isSubmitted={isSubmitted}
                isEditing={isEditingJob}
                setIsEditing={setIsEditingJob}
            />

            {(!isSubmitted || anyComponentEditing) && (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </>
    );
}

export default Cv;
