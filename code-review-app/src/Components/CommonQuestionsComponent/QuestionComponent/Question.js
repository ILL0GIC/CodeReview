import React, { Component } from 'react';

class Question extends Component {

    parseCode() {
        console.log('parsing code...!');
    }

    // parse user question. 
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.codesnippet}</p>
            </div>
        );
    }
}

export default Question;