import React, { Component } from 'react';
import Question from './QuestionComponent/Question';

class CommonQuestions extends Component {

    writeToJson() {

    }

    render() {
        let list_questions = '';
        if (this.props.questions != undefined) {
            list_questions = this.props.questions.map((question) => {
                return <Question name={question.name} />
            })
        } else {
            list_questions = [
            <Question name={'jonFromTwitter'} codesnippet={""} question={"How do you write to files using Python?"}/>, 
            <Question name={'Dave Ramsey'} codesnippet={''} question ={"C++ Error: class has no method, changeShipCourse()"}/>, 
            <Question name={'Kelsey Scott'} codesnippet={''} question={"What is the html tag that controls the view port?"}/>, 
            <Question name={'RandomUser3492'} codesnippet={''} question={`I don't understand how template strings work in JavaScript`}/>]
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