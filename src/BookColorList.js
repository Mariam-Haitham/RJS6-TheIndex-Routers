import React, { Component } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

class BookColorList extends Component {
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
    const bookColor = this.props.match.params.bookColor;
    console.log("Color:", bookColor);
    const books = this.state.filteredBooks.filter(book => {
      if (book.color === bookColor) {
        return <BookRow book={book} key={book.id} />;
      }
    });
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

export default BookColorList;
