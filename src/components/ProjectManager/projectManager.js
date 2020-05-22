import React, { Component } from 'react'

export default class projectManager extends Component {

    state = {
        nChanges: 0,

    }

    actividades = (cantidad) => {
        let actividades = []
        for (let index = 1; index <= cantidad; index++) {

            var avance = (Math.random() * 100).toFixed(0);
            var progressBarColor = '';
            var restante = 100 - avance;
            const sAvance = avance + '%';
            const sRestante = restante + '%';

            if (avance < 25) progressBarColor = 'bg-danger';
            if (avance < 50 && avance > 25) progressBarColor = 'bg-warning';
            if (avance < 75 && avance > 50) progressBarColor = 'bg-primary';
            if (avance < 100 && avance > 75) progressBarColor = 'bg-success';

            actividades.push(
                <div className='row mx-0' >

                    <div className='col-4 border-bottom'>{'Actividad ' + index}</div>

                    <div className='col-1 border-bottom border-left border-right text-center'>{sRestante}</div>

                    <div className='col-7 mt-1'>

                        <div class="progress">

                            <div class={"progress-bar progress-bar-striped progress-bar-animated " + progressBarColor} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: sAvance }}>{sAvance}
                            </div>

                        </div>

                    </div>

                </div>
            )
        }

        return (
            actividades
        )
    }

    startChange = () => {

        this.setState((prevState) => {
            var newChange = prevState.nchanges + 1
            return { nChanges: newChange }
        })
    }

    startCount = () => {
        this.interval = setInterval(this.startChange, 500)
    }

    stopCount = () => {
        clearInterval(this.interval);
        this.setState((prevState) => {
            return { nChanges: 0 }
        })
    }

    render() {
        return (
            <div>

                <div className='row mx-0'>

                    <div className='col-4 border-top border-bottom font-weight-bold text-center'>Actividades</div>
                    <div className='col-1 border-top border-bottom font-weight-bold text-center'>Falta</div>
                    <div className='col-7 border-top border-bottom font-weight-bold text-center'>Progreso</div>

                </div>

                {this.actividades(this.props.cantidad)}

                <div className='row'>

                    <div className='col-auto mx-auto my-4 text-center'>
                        <button className='btn btn-success' type='submit' onClick={this.startCount}>Start</button>
                    </div>

                    <div className='col-auto mx-auto my-4 text-center'>
                        <button className='btn btn-danger' type='submit' onClick={this.stopCount}>Stop</button>
                    </div>

                </div>

            </div>
        )
    }
}


