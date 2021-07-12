import React from 'react';
import './titleBar.css';

function TitleBar(props) {
    return (
        /*
        Notice how for each HTML tag that has a class attached to it, we are using "className=..."
        rather than "class=..." This is because "class" is reserved in JavaScript files and so we 
        must use "className" when trying to link a CSS class as an attribute of an HTML tag. 

        Also, notice how we have used one of the styles located in the app.css file "row-spacer."
        This gives a little space between each row in our application.
        */
        <div className="row row-spacer">
            <div className="col text-start titlebar-nav" style={{padding: 0}}>
                <div>
                    <h1>dCC Library</h1>
                </div>
            </div>
        </div>
    );
}

export default TitleBar;