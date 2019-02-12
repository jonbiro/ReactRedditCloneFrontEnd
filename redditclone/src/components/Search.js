import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <br />
        <section className="search-form">
          <input
            onChange={this.props.filterPosts}
            value={this.props.searchTerm}
            type="text"
            name="search"
            placeholder="Search By Title"
          />
        </section>
        <br />
      </div>
    );
  }
}

export default Search;
