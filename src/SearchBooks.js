import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListBooksSearch from './ListBooksSearch'
import './App.css'

class SearchBooks extends Component{
    
    static propTypes = {
        booksSearch: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
        onUpdateSearchBooks: PropTypes.func.isRequired,
    }

    render(){
        const {booksSearch, onChangeShelf, onUpdateSearchBooks} = this.props
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" href="/" >Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event) => onUpdateSearchBooks(event.target.value)}/>
              </div>
            </div>
            {booksSearch && (
              <ListBooksSearch
              books={booksSearch}
              onChangeShelf={(book, shelf) => {
                onChangeShelf(book, shelf)}
              }
            />
            )}
          </div>
        )
    }
}

export default SearchBooks