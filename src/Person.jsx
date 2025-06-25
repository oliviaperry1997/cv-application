import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({
        fullName: " ",
        dateOfBirth: "",
        email: "",
        phone: "",
    });

    const [firstName = "", lastName = ""] = person.fullName.trim().split(" ");

    const handleFirstNameChange = (e) => {
        setPerson({
            ...person,
            fullName: `${e.target.value} ${lastName}`.trim(),
        });
    };

    const handleLastNameChange = (e) => {
        setPerson({
            ...person,
            fullName: `${firstName} ${e.target.value}`.trim(),
        });
    };

    const handlePersonChange = (field) => (e) => {
        setPerson({ ...person, [field]: e.target.value });
    };

    return (
        <div>
            <h2>General Information</h2>
            <p>
                <label htmlFor="first-name">First Name: </label>
                <input
                    id="first-name"
                    type="text"
                    value={firstName || ""}
                    onChange={handleFirstNameChange}
                />
            </p>
            <p>
                <label htmlFor="last-name">Last Name: </label>
                <input
                    id="last-name"
                    type="text"
                    value={lastName || ""}
                    onChange={handleLastNameChange}
                />
            </p>
            <p>
                <label htmlFor="dob">Date of Birth</label>
                <input
                    id="dob"
                    type="date"
                    value={person.dateOfBirth}
                    onChange={handlePersonChange("dateOfBirth")}
                />
            </p>
            <p>
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="email"
                    value={person.email}
                    onChange={handlePersonChange("email")}
                />
            </p>
            <p>
                <label htmlFor="phone">Phone Number: </label>
                <input
                    id="phone"
                    type="tel"
                    value={person.phone}
                    onChange={handlePersonChange("phone")}
                />
            </p>
        </div>
    );
}

export default Person;
