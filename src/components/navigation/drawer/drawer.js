import React, {Component, Fragment} from 'react'
import Backdrop from '../../UI/backdrop/backdrop'
import './drawer.css'

const links = [1, 2, 3];

export default class Drawer extends  Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
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