import React, {Component} from 'react'
import MenuToggle from '../../components/navigation/menuToggle/menuToggle'
import './Layout.css'

export default class Layout extends Component {

    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    render() {
        return(
            <div className="layout">

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    { this.props.children }
                </main>

            </div>
        )
    }
}

