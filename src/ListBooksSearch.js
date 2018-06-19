import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    }
    render(){
        const { books, onChangeShelf } = this.props;

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {books && (books.map((book) => (
                        <Book key={book.id} book={book}
                        onChangeShelf={onChangeShelf}
                        />
                    )))}
                </ol>
            </div>
        )
    }
}



export default ListBooks

