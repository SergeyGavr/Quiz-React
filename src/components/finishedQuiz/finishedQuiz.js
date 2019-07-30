import React from 'react'
import './finishedQuiz.css'

const FinishedQuiz = props => {
    return (
        <div className='finishedQuiz'>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you?
                    <i className={'fa fa-times failure'} />
                </li>
                <li>
                    <strong>2. </strong>
                    How are you?
                    <i className={'fa fa-check success'} />
                </li>
            </ul>
            <p>Правильно 4 из 10</p>

            <div>
                <button className='btn btn-primary'>Повторить</button>
            </div>
        </div>
    )
};

export default FinishedQuiz;