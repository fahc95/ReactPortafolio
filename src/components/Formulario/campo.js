import React, { Component } from 'react'

export default class Campo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campoGrande: props.campoGrande,
            tipo: props.tipo
        }
    }

    render() {

        if (this.state.tipo === 'pais') {
            <div className='form-group col-sm-12 col-md-6'>

                <label className='font-weight-bold'>{this.props.label}</label>

                <div className='input-group'>
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className={"fa " + this.props.icono}></i></span>
                    </div>
                    <input type={this.props.tipo} className="form-control" id={"input" + this.props.label} placeholder={this.props.label} onChange={this.props.handle_OnChange} />

                </div>

            </div>
        }

        if (this.state.campoGrande) {
            return (

                <div className='form-group col-sm-12'>

                    <label className='font-weight-bold'>{this.props.label}</label>

                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className={"fa " + this.props.icono}></i></span>
                        </div>
                        <input type={this.props.tipo} className="form-control" id={"input" + this.props.label} placeholder={this.props.label} />
                    </div>

                </div>
            )
        }

        else {
            return (

                <div className='form-group col-sm-12 col-md-6'>

                    <label className='font-weight-bold'>{this.props.label}</label>

                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className={"fa " + this.props.icono}></i></span>
                        </div>
                        <input type={this.props.tipo} className="form-control" id={"input" + this.props.label} placeholder={this.props.label} />
                    </div>

                </div>
            )
        }

    }
}