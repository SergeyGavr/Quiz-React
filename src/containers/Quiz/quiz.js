import React, {Component} from 'react'
import './quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/activeQuiz'
import FinishedQuiz from '../../components/finishedQuiz/finishedQuiz'

export default class Quiz extends Component {

    state = {
        isFinished : true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Красный', id: 3 },
                    { text: 'Зеленый', id: 4 }
                ]
            },
            {
                id: 2,
                question: 'Что делали древние люди, чтобы вызвать дождь?',
                rightAnswerId: 3,
                answers: [
                    { text: 'Три дня ничего не ели', id: 1 },
                    { text: 'Убивали мамонта', id: 2 },
                    { text: 'Танцевали вокруг костра с бубном в руках', id: 3 },
                    { text: 'Ходили с зонтиком и говорили «кажется, дождь начинается…»', id: 4 }
                ]
            },
            {
                id: 3,
                question: 'Подвижный холм песка в пустыне называется…',
                rightAnswerId: 1,
                answers: [
                    { text: 'Дюна', id: 1 },
                    { text: 'Утес', id: 2 },
                    { text: 'Скала', id: 3 },
                    { text: 'Гора', id: 4 }
                ]
            },
            {
                id: 4,
                question: 'Где находится яд у кобры?',
                rightAnswerId: 2,
                answers: [
                    { text: 'На кончике языка', id: 1 },
                    { text: 'В зубе', id: 2 },
                    { text: 'На хвосте', id: 3 },
                    { text: 'В капюшоне', id: 4 }
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        console.log('AnswerID: ', answerId);
        console.log('Active question: ', this.state.activeQuestion + 1);
        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
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
            this.setState({
                answerState: {[answerId]: 'failure'}
            });
            // alert('Неверно... Подумайте и ответьте еще раз.')
        }

    };




    render() {
        return(
            <div className='quiz'>

                <div className='quiz-wrapper'>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz/>
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