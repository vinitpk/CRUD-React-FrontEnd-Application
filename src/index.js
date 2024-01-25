  // Import necessary modules from the 'react' and 'react-dom' libraries
  import React from 'react';
  import ReactDOM from 'react-dom/client';

  // Import the main styles for the application
  import './index.css';

  // Import the main App component
  import App from './App';

  // Create a root using ReactDOM.createRoot and specify the root element with the id 'root'
  const root = ReactDOM.createRoot(document.getElementById('root'));

  // Render the App component within the root using React.StrictMode
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
