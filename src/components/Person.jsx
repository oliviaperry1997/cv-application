// import { useState } from "react";

function Person({ person, setPerson, isSubmitted, isEditing, setIsEditing }) {
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const isEditable = !isSubmitted || isEditing;

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

    const handleChange = (field) => (e) => {
        setPerson({ ...person, [field]: e.target.value });
    };

    return (
        <div>
            <h2>General Information</h2>
            <p>
                <label htmlFor="first-name">First Name: </label>
                {isEditable ? (
                    <input
                        id="first-name"
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                ) : (
                    <span>{firstName}</span>
                )}
            </p>
            <p>
                <label>Last Name: </label>
                {isEditable ? (<input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                />) : (
                    <span>{lastName}</span>
                )}
            </p>
            <p>
                <label>Date of Birth: </label>
                {isEditable ? (<input
                    type="date"
                    value={person.dateOfBirth}
                    onChange={handleChange("dateOfBirth")}
                />) : (
                    <span>{person.dateOfBirth}</span>
                )}
            </p>
            <p>
                <label>Email: </label>
                {isEditable ? (<input
                    type="email"
                    value={person.email}
                    onChange={handleChange("email")}
                />) : (
                    <span>{person.email}</span>
                )}
            </p>
            <p>
                <label htmlFor="phone">Phone Number: </label>
                {isEditable ? (<input
                    id="phone"
                    type="tel"
                    value={person.phone}
                    onChange={handleChange("phone")}
                />) : (
                    <span>{person.phone}</span>
                )}
            </p>

            {isSubmitted && !isEditable && (
                <button onClick={handleEditClick}>Edit</button>
            )}
        </div>
    );
}

export default Person;
