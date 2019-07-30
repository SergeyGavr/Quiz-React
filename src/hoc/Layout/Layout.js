import React, {Component} from 'react'
import MenuToggle from '../../components/navigation/menuToggle/menuToggle'
import Drawer from '../../components/navigation/drawer/drawer'
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

                <Drawer
                    isOpen={this.state.menu}
                />

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

