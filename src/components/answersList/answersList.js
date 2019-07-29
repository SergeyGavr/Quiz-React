import React from 'react'
import './answersList.css'
import AnswerItem from '../answerItem/answerItem'

const AnswersList = (props) => (
    <ul className='answersList'>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        }) }
    </ul>
);

export default AnswersList;