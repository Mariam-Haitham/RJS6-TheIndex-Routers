import React, { Component } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    const color = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;
    if (color) {
      books = books.filter(book => book.color === color);
    }
    books = books.map(book => <BookRow book={book} key={book.id} />);
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
