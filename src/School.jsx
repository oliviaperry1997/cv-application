import { useState } from "react";

function School() {
    const [school, setSchool] = useState({
        schoolName: "",
        studyTitle: "",
        studyStartDate: "",
        studyEndDate: "",
    });

    const handleSchoolChange = (field) => (e) => {
        setSchool({ ...school, [field]: e.target.value });
    };

    return (
        <div>
            <h2>Educational Experience</h2>
            <p>
                <label htmlFor="schoolName">School Name: </label>
                <input
                    id="schoolName"
                    type="text"
                    value={school.schoolName}
                    onChange={handleSchoolChange("schoolName")}
                />
            </p>
            <p>
                <label htmlFor="studyTitle">Title of Study: </label>
                <input
                    id="studyTitle"
                    type="text"
                    value={school.studyTitle}
                    onChange={handleSchoolChange("studyTitle")}
                />
            </p>
            <p>
                <label htmlFor="studyStartDate">Date of Study: </label>
                <input
                    id="studyStartDate"
                    type="date"
                    value={school.studyStartDate}
                    onChange={handleSchoolChange("studyStartDate")}
                />
                <span> - </span>
                <input
                    id="studyEndDate"
                    type="date"
                    value={school.studyEndDate}
                    onChange={handleSchoolChange("studyEndDate")}
                ></input>
            </p>
        </div>
    );
}

export default School;
