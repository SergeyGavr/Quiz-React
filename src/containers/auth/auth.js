import React, {Component} from 'react'

import './auth.css'

export default class Auth extends Component {

    loginHandler = () => {

    };

    regHandler = () => {

    };

    sumbitHandler = event => {
        event.preventDefault
    };

    render() {
        return (
            <div className='auth'>
                <div>
                    <h1>Авторизация</h1>

                    <form
                        className='authForm'
                        onSubmit={this.sumbitHandler}>
                        <input type="text"/>
                        <input type="text"/>

                        <button
                            className='btn btn-success'
                            onClick={this.loginHandler}
                        >Войти</button>
                        <button
                            className='btn btn-primary'
                            onClick={this.regHandler}
                        >Зарегистрироватся</button>
                    </form>
                </div>

            </div>
        )
    }
}