import React from 'react';
import './book.css';

function Book(props) {
    return (
        <div className="book">
            <div className="cover">
                <h3 className="title">{props.book.title}</h3>
                <h5 className="description">{props.book.author}</h5>
            </div>
        </div>
    );
}

export default Book;