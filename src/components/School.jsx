// import { useState } from "react";

function School({ school, setSchool, isSubmitted, isEditing, setIsEditing }) {
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const isEditable = !isSubmitted || isEditing;

    const handleChange = (field) => (e) => {
        setSchool({ ...school, [field]: e.target.value });
    };

    return (
        <>
            <div>
                <h2>Educational Experience</h2>
                <p>
                    <label htmlFor="schoolName">School Name: </label>
                    {isEditable ? (
                        <input
                            id="schoolName"
                            type="text"
                            value={school.schoolName}
                            onChange={handleChange("schoolName")}
                        />
                    ) : (
                        <span>{school.schoolName}</span>
                    )}
                </p>
                <p>
                    <label htmlFor="studyTitle">Title of Study: </label>
                    {isEditable ? (
                        <input
                            id="studyTitle"
                            type="text"
                            value={school.studyTitle}
                            onChange={handleChange("studyTitle")}
                        />
                    ) : (
                        <span>{school.studyTitle}</span>
                    )}
                </p>
                <p>
                    <label htmlFor="studyStartDate">Date of Study: </label>
                    {isEditable ? (
                        <>
                            <input
                                id="studyStartDate"
                                type="date"
                                value={school.studyStartDate}
                                onChange={handleChange("studyStartDate")}
                            />
                            <span> to </span>
                            <input
                                id="studyEndDate"
                                type="date"
                                value={school.studyEndDate}
                                onChange={handleChange("studyEndDate")}
                            />
                        </>
                    ) : (
                        <span>
                            {school.studyStartDate} {school.studyEndDate !== '' && ('to')} {school.studyEndDate}
                        </span>
                    )}
                </p>

                {isSubmitted && !isEditable && (
                    <button onClick={handleEditClick}>Edit</button>
                )}
            </div>
        </>
    );
}

export default School;
