import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";

// Functional component representing the form for adding a new student
const AddStudent = () => {
  // useEffect to update the document title to "Add Student" when the component mounts
  // Dynamically change the favicon
  useEffect(() => {
    document.title = "Add Student";
    const favicon = document.getElementById("favicon");
    favicon.href = process.env.PUBLIC_URL + "/favicon/favicon-add.ico";
  }, []);

  // Initialize navigate function from useNavigate
  let navigate = useNavigate();

  // Initialize state for student data using useState
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  // Destructure values from the student state
  const { firstName, lastName, email, department } = student;

  // Handle input changes and update the student state
  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle form submission to save a new student
  const saveStudent = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server to add a new student
      await axios.post(`${API_BASE_URL}/students`, student);
      // Navigate to the view-students page after successful addition
      navigate("/view-students");
    } catch (error) {
      // Handle different types of errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(`Server responded with status ${error.response.status}`);
        console.error("Error data:", error.response.data);

        // Handle specific error messages from the server
        if (error.response.data.error) {
          alert(`Error: ${error.response.data.error}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", error.message);
      }
    }
  };

  // Render the form for adding a new student
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className="col-sm-8 px-5 shadow-lg p-3 mb-3 bg-body rounded"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <h2 className="mt-3 mb-4">Add Student</h2>
        <form onSubmit={(e) => saveStudent(e)}>
          {/* Input fields for first name */}
          <div className="row">
            <div className="input-group sm-12 col-md-6 mb-5">
              <label className="input-group-text" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            {/* Input fields for last name */}
            <div className="input-group sm-12 col-md-6 mb-5">
              <label className="input-group-text" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                id="lastName"
                required
                value={lastName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            {/* Input fields for email */}
            <div className="input-group sm-12 col-md-6 mb-5">
              <label className="input-group-text" htmlFor="email">
                Your Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            {/* Input fields for department */}
            <div className="input-group sm-12 col-md-6 mb-5">
              <label className="input-group-text" htmlFor="department">
                Department
              </label>
              <input
                className="form-control"
                type="text"
                name="department"
                id="department"
                required
                value={department}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          {/* Buttons for saving and canceling the form */}
          <div className="d-flex justify-content-start mb-3">
            <div className="me-3">
              <button className="btn btn-outline-success btn-lg" type="submit">
                Add
              </button>
            </div>
            <div className="me-3">
              <Link
                className="btn btn-outline-warning btn-lg"
                to={"/view-students"}
                type="submit"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the AddStudent component as the default export
export default AddStudent;
