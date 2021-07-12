import React, { Component } from 'react';

class BookCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            author: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.title);
        console.log(this.state.author);
        const book = {
            title: this.state.title,
            author: this.state.author
        }
        this.props.addNewBook(book);
        this.setState({
            title: '',
            author: ''
        });
    }

    render() {
        return ( 
            <div>
                <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center p-2">
                    <h3 className="text-muted text-center">Add a new book!</h3>
                </div>
                <div className="row row-cols-1 row-cols-xs-12 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 d-flex justify-content-center p-2">
                    <div className="col d-flex justify-content-center align-items-center">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control"
                                id="floatingInput" placeholder="Book Title"
                                name="title" value={this.state.title}
                                onChange={this.handleChange} />
                                <label for="floatingInput">Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control"
                                id="floatingInput" placeholder="Author"
                                name="author" value={this.state.author}
                                onChange={this.handleChange} />
                                <label for="floatingInput">Author</label>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary"
                                value="Add">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookCreator;

/*
<div class="row p-3">
    <div class="col d-flex justify-content-center align-content-center">
        <form onSubmit={this.handleSubmit}>
            <label class="text-muted">Title:</label>
            <input type="text"
            name="title" value={this.state.title}
            onChange={this.handleChange} />
                
            <label class="text-muted">Author:</label>
            <input type="text"
            name="author" value={this.state.author}
            onChange={this.handleChange} />
                
            <input type="submit" value="Add" />
        </form>
    </div>
</div>
*/