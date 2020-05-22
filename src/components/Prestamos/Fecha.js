import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/es'
import 'react-datepicker/dist/react-datepicker.css';

export default class Fecha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fechaContrato: moment()
        };

        this.handleChange_fechaContratoInicial = this.handleChange_fechaContratoInicial.bind(this);
    }

    handleChange_fechaContratoInicial(date) {
        this.setState({
            fechaContrato: date
        });
    }

    render() {

        return <DatePicker
            selected={this.state.fechaContrato}
            onChange={this.handleChange_fechaContratoInicial}
            id={this.props.id}
            locale='es' />;
    }
}