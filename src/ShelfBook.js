import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooksShelf'
import './App.css'

class ShelfBook extends Component{
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    }

    render(){
        const {books, title, onChangeShelf} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <ListBooks 
                books={books}
                onChangeShelf={onChangeShelf}
                />
            </div>
        )
    }
}

export default ShelfBook