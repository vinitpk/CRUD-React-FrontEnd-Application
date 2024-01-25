// Import Bootstrap styles and scripts, and custom styles
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

// Import React components and modules
import Home from "./Home";
import NavBar from "./component/common/NavBar";
import StudentsView from "./component/student/StudentsView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";

// Main App component
function App() {
  
  return (
    // Main container with a margin from the top
    <main className="container mt-3">
      {/* Router for managing navigation */}
      <Router>
        {/* Navigation bar component */}
        <NavBar></NavBar>

        {/* Routes for different views */}
        <Routes>
          {/* Home view */}
          <Route exact path="/" element={<Home />}></Route>

          {/* View all students */}
          <Route exact path="/view-students" element={<StudentsView />}></Route>

          {/* Add new student view */}
          <Route exact path="/add-students" element={<AddStudent />}></Route>

          {/* Edit student view */}
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent/>}
          ></Route>

          {/* Student profile view */}
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile/>}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

// Export the App component as the default export
export default App;
