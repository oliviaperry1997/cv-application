// import { useState } from "react";

function Job({ job, setJob, isSubmitted, isEditing, setIsEditing }) {
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const isEditable = !isSubmitted || isEditing;

    const handleChange = (field) => (e) => {
        setJob({ ...job, [field]: e.target.value });
    };

    return (
        <>
            <div>
                <h2>Employment History</h2>
                <p>
                    <label htmlFor="companyName">Company Name: </label>
                    {isEditable ? (
                        <input
                            id="companyName"
                            type="text"
                            value={job.companyName}
                            onChange={handleChange("companyName")}
                        />
                    ) : (
                        <span>{job.companyName}</span>
                    )}
                </p>
                <p>
                    <label htmlFor="jobTitle">Position Title: </label>
                    {isEditable ? (
                        <input
                            id="jobTitle"
                            type="text"
                            value={job.jobTitle}
                            onChange={handleChange("jobTitle")}
                        />
                    ) : (
                        <span>{job.jobTitle}</span>
                    )}
                </p>
                <p>
                    <label htmlFor="jobDesc">Job Description: </label>
                    {isEditable ? (
                        <input
                            id="jobDesc"
                            type="text"
                            value={job.jobDesc}
                            onChange={handleChange("jobDesc")}
                        />
                    ) : (
                        <span>{job.jobDesc}</span>
                    )}
                </p>
                <p>
                    <label htmlFor="jobStartDate">Date of Employment: </label>
                    {isEditable ? (
                        <>
                            <input
                                id="jobStartDate"
                                type="date"
                                value={job.jobStartDate}
                                onChange={handleChange("jobStartDate")}
                            />
                            <span> to </span>
                            <input
                                id="jobEndDate"
                                type="date"
                                value={job.jobEndDate}
                                onChange={handleChange("jobEndDate")}
                            />
                        </>
                    ) : (
                        <span>
                            {job.jobStartDate} {job.jobEndDate !== '' && ('to')} {job.jobEndDate}
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

export default Job;
