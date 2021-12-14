import React from "react";

const NoResultsFound = ({ searchResult }) => {
  return (
    <div>
      <h2>
        <h2>Whoops...</h2>No Matching results were found for "{searchResult}"
      </h2>
      <button>Try again</button>
    </div>
  );
};
export default NoResultsFound;
