import { useState } from "react";

function Job() {
    const [job, setJob] = useState({
        companyName: "",
        jobTitle: "",
        jobDesc: "",
        jobStartDate: "",
        jobEndDate: "",
    });

    const handleJobChange = (field) => (e) => {
        setJob({ ...job, [field]: e.target.value });
    };

    return (
        <div>
            <h2>Employment History</h2>
            <p>
                <label htmlFor="companyName">Company Name: </label>
                <input
                    id="companyName"
                    type="text"
                    value={job.companyName}
                    onChange={handleJobChange("companyName")}
                />
            </p>
            <p>
                <label htmlFor="jobTitle">Position Title: </label>
                <input
                    id="jobTitle"
                    type="text"
                    value={job.jobTitle}
                    onChange={handleJobChange("jobTitle")}
                />
            </p>
            <p>
                <label htmlFor="jobDesc">Job Description: </label>
                <input
                    id="jobDesc"
                    type="text"
                    value={job.jobDesc}
                    onChange={handleJobChange("jobDesc")}
                />
            </p>
            <p>
                <label htmlFor="jobStartDate">Date of Employment: </label>
                <input
                    id="jobStartDate"
                    type="date"
                    value={job.jobStartDate}
                    onChange={handleJobChange("jobStartDate")}
                />{" "}
                <span> - </span>
                <input
                    id="jobEndDate"
                    type="date"
                    value={job.jobEndDate}
                    onChange={handleJobChange("jobEndDate")}
                ></input>
            </p>
        </div>
    );
}

export default Job;
