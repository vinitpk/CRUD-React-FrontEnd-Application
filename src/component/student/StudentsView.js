import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../common/Search";
import { API_BASE_URL } from "../../config";

// Importing Bootstrap styles and JavaScript
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

// Importing icons from React Icons library
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

// Functional component representing the view of all students
const StudentsView = () => {
  // State to store the list of students
  const [students, setStudents] = useState([]);
  // State for search functionality
  const [search, setSearch] = useState("");

  // update the document title to "Students"
  document.title = "Students";

  // Dynamically change the favicon
  const favicon = document.getElementById("favicon");
  favicon.href = process.env.PUBLIC_URL + "/favicon/favicon.ico";

  // Use effect to load the list of students when the component mounts

  useEffect(() => {
    loadStudents();
  }, []);

  // Function to fetch and set the list of students
  const loadStudents = async () => {
    // Send a GET request to the server to fetch the list of students
    const result = await axios.get(`${API_BASE_URL}/students`, {
      validateStatus: () => {
        return true;
      },
    });

    // Check if the status code is 302 (FOUND) and update the state with the data
    if (result.status === 302) {
      setStudents(result.data);
    }
  };

  // const loadStudents = async () => {
  //   try {
  //     const result = await axios.get(`${API_BASE_URL}/students`);
  //     setStudents(result.data);
  //   } catch (error) {
  //     console.error("Error loading students:", error);
  //   }
  // };

  // Function to handle the delete action for a specific student
  const handleDelete = async (id) => {
    // Send a DELETE request to the server to delete the student by ID
    await axios.delete(`${API_BASE_URL}/students/delete/${id}`);
    // Reload the list of students after successful deletion
    loadStudents();
  };

  // Render the component with the list of students
  return (
    <section
      className="shadow rounded p-4 m-2"
      style={{ backgroundColor: "whitesmoke" }}
    >
      {/* Search component for filtering students by first name */}
      <Search search={search} setSearch={setSearch} />

      <div className="table-responsive">
        {/* Table to display the list of students */}
        <table className="table table-bordered table-hover shadow-lg rounded p-5">
          <thead>
            <tr className="text-center table-success">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {/* Map through the filtered students and display each row */}
            {students
              .filter((st) => st.firstName.toLowerCase().includes(search))
              .map((student, index) => (
                <tr key={student.id}>
                  {/* Display student information in each column */}
                  <th scope="row" key={index} className="col-1 col-md-1">
                    {index + 1}
                  </th>
                  <td className="col-4 col-md-2">{student.firstName}</td>
                  <td className="col-4 col-md-2">{student.lastName}</td>
                  <td className="col-6 col-md-3">{student.email}</td>
                  <td className="col-6 col-md-3">{student.department}</td>

                  {/* Action buttons for viewing, editing, and deleting a student */}
                  <td className="mx-2 col-4 col-sm-3 col-md-2">
                    <Link
                      className="btn btn-info"
                      to={`/student-profile/${student.id}`}
                    >
                      <FaRegEye />
                    </Link>
                  </td>

                  <td className="mx-2 col-4 col-sm-3 col-md-2">
                    <Link
                      className="btn btn-warning"
                      to={`/edit-student/${student.id}`}
                    >
                      <FaRegEdit />
                    </Link>
                  </td>

                  <td className="mx-2 col-4 col-sm-3 col-md-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(student.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Export the StudentsView component as the default export
export default StudentsView;
