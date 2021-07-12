import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import BookViewer from './BookViewer/bookViewer';
import BookCreator from './BookCreator/bookCreator';
import Footer from './Footer/footer';

class App extends Component {
    /* State */
    state = { }
    constructor(props) {
        /* Constructor */
        super(props);
        this.books = [
            { title: 'Ready Player One', author: 'Ernest Cline' },
            { title: 'All the Light We Cannot See', author: 'Anthony Doerr' },
            { title: 'The First and Last Freedom', author: 'Jiddu Krishnamurti' },
        ];
        this.state = {
            bookNumber: 0
        }
    }

    addNewBook(book) {
        this.books.push(book);
        this.setState({
            bookNumber: this.books.length - 1
        });
    }
    
    goToNextBook() {
        /* function: goToNextBook */
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if (tempBookNumber === this.books.length) {
            tempBookNumber = 0;    
        }
        this.setState({
            bookNumber: tempBookNumber
        });
        
    }

    goToPreviousBook() {
        /* function: goToPreviousBook */
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if (tempBookNumber < 0) {
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    render() {
        /* function: render */
        return (
            <div className="container-fluid">
                {/* Title */}
                <TitleBar /> {/* titleBar.jsx & titleBar.css */}
                
                {/* Content */}

                {/* BookViewer.jsx */}
                <BookViewer book={this.books[this.state.bookNumber]} 
                nextBook={() => this.goToNextBook()} 
                previousBook={() => this.goToPreviousBook()} />
                {/* book, nextBook and previousBook are all passed to bookViewer.jsx */}

                {/* BookCreator.jsx */}
                <BookCreator addNewBook={this.addNewBook.bind(this)} />

                {/* Footer */}
                <Footer />
                
            </div>
        )
    }
}

/* This line prevents the following error from occurring: 
Attempted import error: './components/app' does not contain a 
default export (imported as 'App')
*/
export default App;

/* Notes */
/*
    State: 
    
    A react component. A class component. Also known as a stateful
    component. Currently, we're not using state within this component,
    but we will shortly. For now, we want to tell the ReactDOM.render 
    function in the index.js file to use this component as the root of
    our application. 

    Whenever we are creating class components, we must include this render
    method. The render method is called immediately when the component is 
    brought onto our screen within the browser. The render method of class 
    components is where we write our JSX (HTML and JavaScript) code and is 
    what represents what we want to show on the screen when this component 
    is called. The render method is also important for handling state.

    render() {
        return (
            <h1>Our React App Using a Component</h1>
        );
    }
*/

/*
    Constructor:
    
    Here we have created the standard class constructor for a class component. 
    We are creating a variable called "books" and setting it equal to an array 
    of objects.

    Notice also that we have moved our state variable initialization to within 
    the constructor and added a stateful variable "bookNumber". This "bookNumber"
    variable will represent the index number of the book in the books array 
    that we're currently viewing.
*/

/*
    function: goToNextBook & goToPreviousBook

    Here we have created a new function on our App class component called goToNextBook.
    The first thing we do is store the current value of stateful "bookNumber" variable.
    
    Next, we increment this tempBookNumber variable by one. We do this because we're 
    trying to increment the stateful "bookNumber" variable up by one. This is because
    we are using the "bookNumber" as an index number in our header tags, so by increasing
    this variable it will display the next book number in our books array within those
    header tags.

    After this, we check if the new value we are about to assign "bookNumber" to is out 
    of range of our books array's indicies. If our newly incremented "tempbookNumber" 
    variable is equal to the length of our books array, then we know that we would be 
    setting bookNumber equal to an invalid index location. (books array has a length of
    three (3), but indices will only go up to two (2)). In that case, we will set to zero
    (0), so we will just display the first book again.

    Finally, we'll actually update our stateful "bookNumber" variable with its new value.
    (i.e. bookNumber: tempBookNumber)

    Whenever you are updating a stateful variable, we must use the setState function. This
    function is made available to us from our inheriting the Component class. You cannot 
    update a stateful variable directly. 
    (i.e. DO NOT DO: this.state.bookNumber = tempBookNumber;)
*/

/*  
    function: render
    Here we are importing the TitleBar component into the app.js file. Since
    we have just imported the TitleBar component, we can now use it as if it
    were its own HTML tag within the JSX code.

    The <TitleBar /> component is contained within a container-fluid
    because Bootstrap indicates that a class with "row" must be contained
    inside of a "container" class.
*/