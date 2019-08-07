import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Spinner from '../../components/UI/spinner/spinner'
import {connect} from 'react-redux'

import './quizList.css'
import {fetchQuizes} from "../../store/actions/quiz";

class QuizList extends Component {

    renderQuizes() {
        return this.props.quizes.map( quiz => {
            return(
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {

        this.props.fetchQuizes();

    }


    render() {
        return (
            <div className='quizList'>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.props.loading && this.props.length !== 0
                            ? <Spinner/>
                            : <ul>
                                {this.renderQuizes()}
                              </ul>

                    }

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
};

const mapDispatchToProps = {
    fetchQuizes
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)