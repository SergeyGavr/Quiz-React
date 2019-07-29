import React, {Component} from 'react'
import './Layout.css'

export default class Layout extends Component {
    render() {
        return(
            <div className="layout">

                <main>
                    { this.props.children }
                </main>

            </div>
        )
    }
}

