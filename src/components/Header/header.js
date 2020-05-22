import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import reactLogo from '../../../public/logo512.png';
import Tab from './tabInfo';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            nombre: 'Inicio'
        }
    }

    tabsUpdate = (tabSelected) => {
        this.setState({
            selected: tabSelected.props.tabIndex,
            nombre: tabSelected.props.children
        })

        this.props.selectContent(tabSelected.props.children);
    }

    render() {

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href='#' className='navbar-brand ml-4'>
                    <img src={reactLogo} className='logo my-auto mr-3' />React Protafolio
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            this.props.tabs.map((tab, index) =>
                                <Tab key={index} tabIndex={index}
                                    icon={tab.icono} tabsUpdate={this.tabsUpdate}
                                    active={this.state.selected == index ? ' active' : ''}>
                                    {tab.nombre}
                                </Tab>
                            )
                        }

                    </ul>
                </div>

            </nav>
        )
    }
}
