import React, {Component, Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/backdrop/backdrop'
import './drawer.css'

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false},
];

export default class Drawer extends  Component {



    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName='active'
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = ['drawer'];

        if (!this.props.isOpen) {
            cls.push('close')
        }
        return (
            <Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </Fragment>

        )
    }
}