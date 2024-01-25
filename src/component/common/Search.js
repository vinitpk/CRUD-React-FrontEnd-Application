import React from "react";

// Functional component representing a search input box
const Search = ({ search, setSearch }) => {
  return (
    <div className="col-sm-6 mb-4 ">
      {/* Search form with an input box */}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Input box for searching students */}
        <input
          className="form-control"
          type="search"
          role="searchbox"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

// Export the Search component as the default export
export default Search;

