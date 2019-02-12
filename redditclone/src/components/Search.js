import React from "react";

const Search = (props) =>
   {
    return (
      <div><br/>
        <section className="search-form">
          <input
            onChange={props.filterPosts}
            value={props.searchTerm}
            type="text"
            name="search"
            placeholder="Search By Title"
          />
        </section><br/>
      </div>
    );
  };

export default Search;
