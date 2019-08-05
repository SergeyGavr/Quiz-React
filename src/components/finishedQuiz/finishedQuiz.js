import React from 'react'
import {Link} from 'react-router-dom'
import './finishedQuiz.css'

const FinishedQuiz = props => {

    const done = Object.values(props.results).filter((item) => {
        return item === 'success'
    });

    return (
        <div className='finishedQuiz'>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'failure' ? 'fa-times' : 'fa-check',
                        props.results[quizItem.id]
                    ];
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )

                }) }

            </ul>
            <p>Правильно {done.length} из {props.quiz.length}</p>

            <div>
                <button
                    className='btn btn-primary'
                    onClick={props.onRetry}
                >Повторить</button>
                <Link to={'/'}>
                    <button
                        className='btn btn-success'
                    >Перейти в список тестов</button>
                </Link>

            </div>
        </div>
    )
};

export default FinishedQuiz;