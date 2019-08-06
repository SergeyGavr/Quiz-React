import React, {Component} from 'react'
import Input from '../../components/UI/input/input'
import './auth.css'
import is from 'is_js'

export default class Auth extends Component {

    state = {
        isFormValid : false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    loginHandler = () => {

    };

    regHandler = () => {

    };

    sumbitHandler = event => {
        event.preventDefault()
    };

    validateControl(value, validation) {
        if(!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        // console.log(`${controlName}: ${event.target.value}`);

        const formControls = { ...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            formControls, isFormValid
        })
    };

    renderInputs() {
        return Object.keys(this.state.formControls)
            .map((controlName, index) => {
                const control = this.state.formControls[controlName];
                return(
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => {
                            this.onChangeHandler(event, controlName)
                        }}
                    />
                )
            })
    }

    render() {
        return (
            <div className='auth'>
                <div>
                    <h1>Авторизация</h1>

                    <form
                        className='authForm'
                        onSubmit={this.sumbitHandler}>

                        {this.renderInputs()}

                        <button
                            className='btn btn-success'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >Войти</button>
                        <button
                            className='btn btn-primary'
                            onClick={this.regHandler}
                            disabled={!this.state.isFormValid}
                        >Зарегистрироватся</button>
                    </form>
                </div>

            </div>
        )
    }
}