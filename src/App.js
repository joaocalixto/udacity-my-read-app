import React from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import ListBooksHeader from './ListBooksHeader';
import SearchBooks from './SearchBooks'; 
import ListShelf from './ListShelf';
import {Route} from 'react-router-dom';
import AddBook from './AddBook';

class BooksApp extends React.Component {
  state = {
    books : [],
    booksSearch :[],
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then(books => {
      this.setState({books})
    })
  }

  updateSearchBooks(query){
    console.log("wuer = "+query);
    BooksAPI.search(query)
    .then(booksSearch => {
      if(booksSearch)
        this.setState({booksSearch})
    })
  }

  changeShelf(book, shelf){
    console.log("changed to "+ shelf);
    BooksAPI.update(book, shelf)
    .then(this.refresh());
  }

  refresh(){
    BooksAPI.getAll()
    .then(books => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
            <SearchBooks
              booksSearch={(this.state.booksSearch)}
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)}
              }
              onUpdateSearchBooks={(query) => {
                this.updateSearchBooks(query)
              }}
            />
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <ListBooksHeader/>
            <ListShelf 
              books={(this.state.books)}
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)}
              }
            />
            <AddBook/>
        </div>
        )}/>
          
      </div>
    )
  }
}

export default BooksApp
