import React, { Component } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books,
    color: null
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    const books = this.state.filteredBooks.map(book => (
      <BookRow book={book} key={book.id} />
    ));
    return (
      <div>
        <SearchBar onChange={this.filterBooks} />
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default BookList;
