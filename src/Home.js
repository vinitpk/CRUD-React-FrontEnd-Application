// Import React library
import React, { useEffect } from "react";
// import { API_BASE_URL, API_BASE_ENV } from "./config";

// Functional component representing the Home page
const Home = () => {

  // console.log(API_BASE_URL," - ",API_BASE_ENV);

  // useEffect to update the document title to "Icon | Home" when the component mounts
  // Dynamically change the favicon
  useEffect(() => {
    document.title = "C.R.U.D | Home";
    const favicon = document.getElementById("favicon");
    favicon.href = process.env.PUBLIC_URL + "/favicon/favicon.ico";
  }, []);
  return (
    // Container with flex properties to center content vertically and horizontally
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      {/* Heading for the Home page */}
      <h2 className="text-center">Welcome To The Home Page!!</h2>
        
    </div>
  );
};

// Export the Home component as the default export
export default Home;
