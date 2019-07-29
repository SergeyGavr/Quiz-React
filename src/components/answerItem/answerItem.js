import React from 'react'
import './answersItem.css'

const AnswersItem= (props) => {
    let style = 'answerItem';
    if (props.state) {
        style = props.state === 'success'
            ? 'answerItem success'
            : 'answerItem failure';
    }

    return(
        <li
            className={style}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
};

export default AnswersItem;