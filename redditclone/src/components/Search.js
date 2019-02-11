import React from "react";

class Search extends React.Component {

    render() {
        return (
            <section className="search-form">
                <input onChange={this.props.filterCharacters} value={this.props.searchTerm} type="text" placeholder="Search by name or house"/>
            </section>
        );
    }
};

export default Search;