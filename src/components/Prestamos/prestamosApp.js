import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Prestamo from './prestamo'
import moment from 'moment';

export default class prestamosApp extends Component {

    state = {
        prestamos: this.props.prestamos,
    }

    addPrestamo = (prestamo) => {
        this.setState((prevState) => {
            const tempPrestamo = prevState.prestamos
            tempPrestamo.push(prestamo)
            return { prestamos: tempPrestamo }
        })
    }

    deletePrestamo = (index) => {

        this.setState((prevState) => {
            const temPrestamo = prevState.prestamos;
            temPrestamo.splice(index, 1);
            return { prestamos: temPrestamo }

        })
    }

    checkPrestamo = (index) => {

        const temPrestamo = this.state.prestamos;
        temPrestamo[index].complete = true;
        this.setState({ prestamos: temPrestamo })

    }

    manejoOnClick = (e, index) => {
        if (e.target.id === 'delete') this.deletePrestamo(index);
        else if (e.target.id === 'check') this.checkPrestamo(index);
    }

    render() {

        const listPrestamos = this.state.prestamos.map((prestamo, index) => {

            var styleStatus = '';
            const now = Date.now()
            const fechaFin = Number(moment(prestamo.fechaVence, 'L'));
            const fechaInicio = Number(moment(prestamo.fechaContrato, 'L'));

            switch (true) {
                case (fechaFin < now):
                    styleStatus = 'text-danger';
                    break
                case (fechaInicio > now):
                    styleStatus = 'text-success';
                    break;
                case (fechaFin > now && fechaInicio < now):
                    styleStatus = 'text-primary'
                    break;
                case (moment(fechaFin).isSame(now, 'day')):
                    styleStatus = 'text-warning';
                    break;
            }

            if (prestamo.complete) styleStatus = 'text-success';

            //styleStatus = prestamo.complete ? 'text-success' : styleStatus;

            return (
                <div className='row p-1 m-0' key={index}>

                    <div className={'col-3 ' + styleStatus} >{prestamo.cliente}</div>
                    <div className={'col-2 ' + styleStatus} >$ {prestamo.prestamo}</div>
                    <div className={'col-2 ' + styleStatus} >{prestamo.articulo}</div>
                    <div className={'col-2 ' + styleStatus} >{prestamo.fechaContrato}</div>
                    <div className={'col-2 ' + styleStatus} >{prestamo.fechaVence}</div>
                    <a className='text-success fas fa-check mr-2' id='check' onClick={(e) => this.manejoOnClick(e, index)}></a>
                    <a className='text-danger fas fa-times ml-2' id='delete' onClick={(e) => this.manejoOnClick(e, index)}></a>

                </div>
            )
        });

        return (

            <div className="container-fluid border rounded m-2" >

                <div className='row border-bottom m-0'>
                    <div className='h1 text-center mx-auto'>Lista de Prestamos</div>
                </div>

                <div className='row font-weight-bold border-bottom m-0'>

                    <div className='col-3'>Clientes</div>
                    <div className='col-2'>Valor</div>
                    <div className='col-2'>Articulo</div>
                    <div className='col-2'>Fecha de Contrato</div>
                    <div className='col-2'>Fecha de Vencimiento</div>

                </div>

                <div className='border-bottom p-2 pb-2'>
                    {listPrestamos}
                </div>

                <Prestamo addPrestamo={this.addPrestamo} />
            </div>
        )
    }

}