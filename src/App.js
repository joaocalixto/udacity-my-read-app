import React from 'react'
import {Route, Switch} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI'
import ListBooksHeader from './ListBooksHeader';
import SearchBooks from './SearchBooks'; 
import ListShelf from './ListShelf';
import AddBook from './AddBook';
import './App.css'

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
    BooksAPI.search(query,30).then((books) => {
      if(!!books){
        if(books.length>0){
          const booksSearch = books.map((book) => {
            const existingBook = this.state.books.find((b) => b.id === book.id)
            book.shelf = !!existingBook ? existingBook.shelf : 'none'
            return book
          });
          this.setState({ booksSearch })
        }  
      }
    })
  }

  changeShelf(book, shelf){
    console.log("changed to "+ shelf);
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf        
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))     
    })

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
        <Switch>
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
        </Switch>
      </div>
    )
  }
}

export default BooksApp
