import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";

// Importing Bootstrap styles and JavaScript
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

// Functional component representing the student profile page
const StudentProfile = () => {
  // Destructure 'id' from the URL parameters using useParams
  const { id } = useParams();
  // Initialize the navigate function from useNavigate
  const navigate = useNavigate();

  // Initialize state for student data using useState
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  // Dynamically change the favicon
  document.title = `Student ${student.firstName}`;
  // update the document title to "Student Profile"
  const favicon = document.getElementById("favicon");
  favicon.href = process.env.PUBLIC_URL + "/favicon/favicon-read.ico";

  // Use useEffect to load the student data when the component mounts
  useEffect(() => {
    // Define loadStudent function inside useEffect
    const loadStudent = async () => {
      try {
        const result = await axios.get(`${API_BASE_URL}/students/${id}`);
        setStudent(result.data);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Error loading student:", error);
      }
    };

    // Call loadStudent when the component mounts
    loadStudent();
  }, [id]); // Include id in the dependency array

  // Function to handle the delete action
  const handleDelete = async () => {
    // Send a DELETE request to the server to delete the student by ID
    await axios.delete(`${API_BASE_URL}/students/delete/${id}`);
    // Navigate to the view-students page after successful deletion
    navigate("/view-students");
  };

  // Render the student profile page
  return (
    <section
      className="shadow rounded p-4 m-2"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <h2 className=" text-center mb-4">Student Profile</h2>
      <div className="container">
        <div className="row">
          {/* Left column for student details and actions */}
          <div className="col-lg-3 col-md-12 mb-3">
            <div className="card ">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {`${student.firstName} ${student.lastName}`}
                </h5>
                {/* Buttons for calling and messaging */}
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary btn-sm me-2">
                    Call
                  </button>
                  <button type="button" className="btn btn-warning btn-sm">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column for detailed student information */}
          <div className="col-lg-9 col-md-12">
            <div className="card ">
              <div className="card-body">
                {/* Student details */}
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">First Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text mb-0 h6">{student.firstName}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Last Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text mb-0 h6">{student.lastName}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text mb-0 h6">{student.email}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Department</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text mb-0 h6">{student.department}</p>
                  </div>
                </div>
                <hr></hr>

                {/* Action buttons for editing, deleting, and canceling */}
                <div className="row">
                  <div className="d-flex flex-wrap justify-content-start">
                    <Link
                      className="btn btn-outline-info btn-md mb-3 me-3 me-md-2 me-lg-3"
                      to={`/edit-student/${student.id}`}
                      type="submit"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-md mb-3 me-3 me-md-2 me-lg-3"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <Link
                      className="btn btn-outline-warning btn-md mb-3"
                      to={"/view-students"}
                      type="submit"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the StudentProfile component as the default export
export default StudentProfile;
