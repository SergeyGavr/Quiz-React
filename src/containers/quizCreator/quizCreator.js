import React, {Component} from 'react'
import { createControl } from '../../form/formFramework'
import Input from '../../components/UI/input/input'

import './quizCreator.css'

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, {required: true})
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: {
            question: createControl({
                label: 'Введите вопрос',
                errorMessage: 'Вопрос не может быть пустым'
            }, {required: true}),
            option1: createOptionControl(1),
            option2: createOptionControl(2),
            option3: createOptionControl(3),
            option4: createOptionControl(4)
        }
    };

    submitHandler = e => {
        e.preventDefault()
    };

    addQuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    changeHandler = (value, controlName) => {

    };

    renderControls() {
        return Object.keys(this.state.formControls).map(
            (controlName, index) => {
                const control = this.state.formControls[controlName]

                return (
                    <React.Fragment key={controlName + index}>
                        <Input
                            label={control.label}
                            value={control.value}
                            valid={control.valid}
                            shouldValidate={!!control.validation}
                            touched={control.touched}
                            errorMessage={control.errorMessage}
                            onChange={event => this.changeHandler(event.target.value, controlName)}
                        />
                        {index === 0 ? <hr /> : null}
                    </React.Fragment>
                )
            }
        )
    }

    render() {
        return (
            <div className='quizCreator'>
                <div>
                    <h1>Создание тестов</h1>
                    <form onSubmit={this.submitHandler}>

                        {this.renderControls()}

                        <select name="" id=""></select>
                        <button
                            className='btn btn-primary'
                            onClick={this.addQuestionHandler}
                        >Добавить вопрос</button>

                        <button
                            className='btn btn-success'
                            onClick={this.createQuizHandler}
                        >Создать тест</button>
                    </form>
                </div>
            </div>
        )
    }
}