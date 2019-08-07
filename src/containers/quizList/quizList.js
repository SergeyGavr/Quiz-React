import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

import './quizList.css'

export default class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return(
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quiz-wfm.firebaseio.com/quiz.json')
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div className='quizList'>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>

            </div>
        )
    }
}