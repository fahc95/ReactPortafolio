import React, { Component } from 'react'

export default class Tab extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const tabsUpdate = this.props.tabsUpdate;

        return (

            <a className={'btn nav-link' + this.props.active} id={'tab-' + this.props.tabIndex} onClick={() => tabsUpdate(this)} data-toggle="collapse" data-target="#navbarNav">
                <span role='button' className={'fa py-3 ' + this.props.icon}></span> {this.props.children}
            </a>
        )

    }
}
