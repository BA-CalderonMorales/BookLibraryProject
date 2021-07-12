import React from 'react';
import Book from '../Book/book';

function BookViewer(props) {
    return(
        <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center"> 
            <div className="col d-flex justify-content-center align-items-center p-2">
                {/* Button here to move the previous book viewed */}
                <button type="button" class="btn btn-secondary" 
                onClick={() => props.previousBook()}>Previous</button>
            </div>
            {/* BookViewer.jsx logic here. */}
            {/* app.css */}
            <div className="col d-flex justify-content-center align-items-center p-2">
                {/* Book.jsx logic here */}
                <Book book={props.book}/>
            </div>
            <div className="col d-flex justify-content-center align-items-center p-2">
                {/* Button here to move to the previous book viewed */}
                {/* 
                DO NOT DO: <button onClick={this.goToNextBook()}>Next Book</button> 
                This is because it will cause an endless loop. See next line to see 
                how to properly implement function.
                */}
                <button type="button" class="btn btn-secondary" 
                onClick={() => props.nextBook()}>Next</button>
            </div>
        </div>        
    )
}
/* Notes */
/* 
    BookViewer.jsx logic: 
    In the <h1> tag, we are accessing an index of the books 
    array using the stateful variable "bookNumber" with
    "this.state.bookNumber".
    <h2>{this.books[this.state.bookNumber].title}</h2>
    <h4>{this.books[this.state.bookNumber].author}</h4>
    In the <h4> tag, we are accessing the index of the books 
    array using the hard-coded value of 0.
    <h4>{this.books[0].author}</h4>
    Both approaches, in terms of application starting for the 
    first time, will produce the same result. That is because we
    initialize the statefule variable "bookNumber" to the value
    of zero (0) in the constructor of the class.
*/
/*
    Book.jsx logic:
    What is in there is replacing what was previously:
    <h2>{props.book.title}</h2>
    <h4>{props.book.author}</h4>
*/

export default BookViewer;