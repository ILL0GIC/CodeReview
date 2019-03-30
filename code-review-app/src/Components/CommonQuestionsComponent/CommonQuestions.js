import React, { Component } from 'react';
import Question from './QuestionComponent/Question';

class CommonQuestions extends Component {

    render() {
        let list_questions = '';
        if (this.props.questions != undefined) {
            list_questions = this.props.questions.map((question) => {
                return <Question name={question.name} />
            })
        }

        // Likely here is where we will need to do some database stuff...
        return (
            <div className='list-of-questions'>
                {list_questions}
            </div>
        );
    }
}

export default CommonQuestions;