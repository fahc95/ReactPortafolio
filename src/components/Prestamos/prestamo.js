import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import moment from 'moment'
import Fecha from './Fecha'

export default class Prestamo extends Component {

    validarFecha = (fecha) => {
        return (moment(fecha, 'L', true).isValid() || (moment(fecha, 'l', true).isValid()));
    }

    campoVacio = (campo) => {
        return (campo === '');
    }

    handleClick_addPrestamo = (e) => {
        this.addPrestamo();
    }

    addPrestamo = () => {

        const campoCliente = document.getElementById('txtCliente').value;
        const campoArticulo = document.getElementById('txtArticulo').value;
        const campoValor = document.getElementById('txtValor').value;
        const campoFechaInicio = document.getElementById('dateFechaInicio').value;
        const campoFechaVence = document.getElementById('dateFechaVence').value;

        if (this.campoVacio(campoCliente) ||
            this.campoVacio(campoArticulo) ||
            this.campoVacio(campoFechaInicio) ||
            this.campoVacio(campoFechaVence) ||
            this.campoVacio(campoValor)) {
            alert('Debe llenar los campos');
            return
        };

        if (!this.validarFecha(campoFechaInicio) || !this.validarFecha(campoFechaVence)) {
            alert('Fecha Invalida');
            return
        };

        const prestamo = {
            cliente: campoCliente,
            prestamo: campoValor,
            articulo: campoArticulo,
            fechaContrato: campoFechaInicio,
            fechaVence: campoFechaVence,
        }

        this.props.addPrestamo(prestamo);
        document.getElementById('txtCliente').value = '';
        document.getElementById('txtArticulo').value = '';
        document.getElementById('txtValor').value = '';

    }

    render() {
        return (
            <div className='my-4'>

                <form>

                    <div className='form-row'>

                        <div className='form-group col-6'>
                            <label className='font-weight-bold'>Nombre del Cliente:</label>
                            <input className='form-control' type='text' placeholder='Cliente' id='txtCliente' />
                        </div>

                        <div className='form-group col-3'>
                            <label className='font-weight-bold'>Fecha Inicio:</label><br></br>
                            <span className='fa fa-calendar pt-1 pr-2'></span>
                            {<Fecha id='dateFechaInicio' />}
                        </div>

                        <div className='form-group col-3'>
                            <label className='font-weight-bold'>Fecha Vence:</label><br></br>
                            <span className='fa fa-calendar pt-1 pr-2'></span>
                            {<Fecha id='dateFechaVence' />}
                        </div>

                    </div>

                    <div className='form-row'>

                        <div className='form-group col-6'>
                            <label className='font-weight-bold'>Artículo de Canje:</label>
                            <input className='form-control' type='text' placeholder='Articulo' id='txtArticulo' />
                        </div>

                        <div className='form-group col-3'>
                            <label className='font-weight-bold'>Valorado en:</label>
                            <input className='form-control' type='text' placeholder='$$$' id='txtValor' />
                        </div>

                    </div>

                    <div className='form-row m-2'>
                        <span className='btn btn-success' onClick={(e) => this.handleClick_addPrestamo(e)}><i className='fas fa-plus-circle'> Agregar</i></span>
                    </div>

                </form>
            </div>
        )
    }
}
