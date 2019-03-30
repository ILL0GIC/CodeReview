import React, { Component } from 'react';

class Question extends Component {

    parseCode() {
        console.log('parsing code...!');
    }

    // parse user question. 
    render() {
        return (
            <div className='card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <h2 className='tc'>{this.props.name}</h2>
                <p>{this.props.codesnippet}</p>
            </div>
        );
    }
}

export default Question;