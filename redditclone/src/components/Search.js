import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <section className="search-form">
          <input
            onChange={this.props.filterPosts}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search by title"
          />
        </section>
      </div>
    );
  }
}

export default Search;
