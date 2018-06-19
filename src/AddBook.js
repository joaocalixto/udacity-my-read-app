import React, {Component} from 'react'
import './App.css'

class AddBook extends Component{
   

    render(){
        return (
        <div className="open-search">
            <a href='/search' >Add a book</a>
        </div>
        )
    }
}

export default AddBook