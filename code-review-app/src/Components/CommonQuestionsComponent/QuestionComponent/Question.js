import React, { Component } from 'react';

class Question extends Component {

    parseCode() {
        console.log('parsing code...!');
    }

    // parse user question. 
    render() {
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
                <h2 className='tc'>{this.props.name}</h2>
                <p>Question: {this.props.question}</p>
                <div>
                    <p>Code Snippet: <br />{this.props.codesnippet}</p>
                </div>
            </div>
        );
    }
}

export default Question;