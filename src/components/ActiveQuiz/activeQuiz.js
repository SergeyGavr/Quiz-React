import React from 'react'
import './activeQuiz.css'
import AnswersList from '../answersList/answersList'

const ActiveQuiz = props => (
    <div className='activeQuiz'>
        <p className='question'>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
);

export default ActiveQuiz;