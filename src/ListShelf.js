import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfBook from './ShelfBook'
import './App.css'

class ListShelf extends Component{
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    }

    render(){
        const {books, onChangeShelf} = this.props
        return (
            <div className="list-books-content">
            <div>
              <ShelfBook
              books={(books.filter(b => b.shelf === 'currentlyReading'))}
              onChangeShelf={(book, shelf) => {
                onChangeShelf(book, shelf)}
              }
              title="Currently Reading"
              />

              <ShelfBook
              books={(books.filter(b => b.shelf === 'wantToRead'))}
              title="Want to Read"
              onChangeShelf={(book, shelf) => {
                onChangeShelf(book, shelf)}
              }
              />

              <ShelfBook
              books={(books.filter(b => b.shelf === 'read'))}
              title="Read"
              onChangeShelf={(book, shelf) => {
                onChangeShelf(book, shelf)}
              }
              />
            </div>
          </div>
        )
    }
}

export default ListShelf