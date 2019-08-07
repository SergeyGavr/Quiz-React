import React, {Component} from 'react'
import './quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/activeQuiz'
import FinishedQuiz from '../../components/finishedQuiz/finishedQuiz'
import axios from 'axios'
import Spinner from '../../components/UI/spinner/spinner'


export default class Quiz extends Component {

    state = {
        results : {}, // [id]: success, error
        isFinished : false,
        activeQuestion: 0,
        answerState: null,
        quiz: [],
        loading: true
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`https://react-quiz-wfm.firebaseio.com/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;

            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }

        console.log('Quiz id = ', this.props)
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });

            const timeout = window.setTimeout(() => {

                if (this.state.activeQuestion + 1 === this.state.quiz.length) {

                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout)
            }, 500);


        } else {
            results[question.id] = 'failure';
            this.setState({
                answerState: {[answerId]: 'failure'},
                results
            });
        }

    };

    onRetry = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    };



    render() {
        return(
            <div className='quiz'>

                <div className='quiz-wrapper'>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.loading
                            ? <Spinner />
                            :
                            this.state.isFinished
                                ? <FinishedQuiz
                                    results={this.state.results}
                                    quiz={this.state.quiz}
                                    onRetry={this.onRetry}
                                />
                                : <ActiveQuiz
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    quizLength={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}
                                />

                    }



                </div>
            </div>
        )
    }
}