import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';

class progressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            tiempo: this.props.tiempo,
            avance: 0,
            fa_spin: '',
            boton_state: '',
            span_tiempo: 'hidden'
        }
    }

    start = () => {

        if (this.tiempo.value == 0) {
            this.setState({
                span_tiempo: ''
            })

            //console.log(this.state.tiempo)
        }
        else {
            clearInterval(this.interval)
            this.interval = setInterval(() => this.tick(), 100)
            this.setState({
                span_tiempo: 'hidden',
                tiempo: this.tiempo.value,
                contador: 0,
                avance: 0,
                fa_spin: 'fa-spin',
                boton_state: 'Iniciado',
            })
        }
    }

    restart = () => {
        this.interval = setInterval(() => this.tick(), 100)
        this.setState({
            fa_spin: 'fa-spin',
            boton_state: 'Reiniciado'
        })
    }

    stop = () => {
        clearInterval(this.interval)
        this.setState({
            fa_spin: '',
            boton_state: 'Detenido'
        })
    }

    tick() {
        if (this.state.avance >= 100) {
            clearInterval(this.interval)
            this.setState({ avance: 0 })
            this.boton_stop.className = 'btn-group pb-3 position hidden'
            this.boton_restart.className = 'btn-group pb-3 position hidden'
            this.boton_start.className = 'btn-group pb-3 position'
        }
        else {
            this.setState((prevState) => ({
                contador: prevState.contador + 1 / 10,
                avance: ((prevState.contador + 1 / 10) / prevState.tiempo) * 100 > 100 ? 100 :
                    ((prevState.contador + 1 / 10) / prevState.tiempo) * 100
            }))
        }
    }

    componentDidUpdate() {
        if (this.state.avance >= 100)
            this.spinner.className = 'fa fa-spinner font-size'

        switch (this.state.boton_state) {
            case 'Iniciado':
                this.boton_start.className = 'btn-group pb-3 position hidden'
                this.boton_stop.className = 'btn-group pb-3 position'
                this.boton_restart.className = 'btn-group pb-3 position hidden'
                break;
            case 'Detenido':
                this.boton_start.className = 'btn-group pb-3 position hidden'
                this.boton_stop.className = 'btn-group pb-3 position hidden'
                this.boton_restart.className = 'btn-group position pb-3'
                break;
            case 'Reiniciado':
                this.boton_start.className = 'btn-group pb-3 position hidden'
                this.boton_stop.className = 'btn-group pb-3 position'
                this.boton_restart.className = 'btn-group pb-3 position hidden'
                break;
        }
    }

    shouldComponentUpdate(nextState) {
        if (nextState.avance != this.state.avance)
            return true
        else
            return false
    }

    componentWillUnmount() {
        this.setState({
            contador: 0,
            tiempo: 0,
            avance: 0,
            fa_spin: '',
            boton_state: '',
            span_tiempo: 'hidden'
        })
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className='m-3 p-3'>

                <div>

                    <div className="input-group pb-3 size">

                        <div className="input-group-prepend">
                            <span className="input-group-text">Segundos a esperar:</span>
                            <input id='tiempo' className="form-control col-2" type="text" placeholder="" ref={input => this.tiempo = input} />
                            <span id='span_tiempo' className={"input-group-text bg-white text-danger " + this.state.span_tiempo}
                                ref={span => this.span_tiempo = span}>Debe indicar el tiempo!</span>
                        </div>

                    </div>

                    <div className='btn-group pb-3 position' ref={div => this.boton_start = div}>
                        <a className="btn btn-primary text-white" onClick={this.start}>
                            <i className="fa fa-play-circle fa-fw"></i>Iniciar</a>
                    </div>

                    <div className='btn-group pb-3 position hidden' ref={div => this.boton_stop = div}>
                        <a className="btn btn-primary text-white" onClick={this.stop}>
                            <i className="fa fa-play-circle fa-fw"></i>Detener</a>
                    </div>

                    <div className='btn-group pb-3 position hidden' ref={div => this.boton_restart = div}>
                        <a className="btn btn-primary text-white" onClick={this.restart}>
                            <i className="fa fa-play-circle fa-fw"></i>Reiniciar</a>
                    </div>

                </div>

                <p className='font-weight-light'>Segundos trancurridos: {this.state.contador.toFixed(0)}</p>

                <div className="progress m-3">
                    <p className='pr-2'><i className={"fa fa-spinner font-size " + this.state.fa_spin}
                        ref={i => this.spinner = i}></i></p>
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                        style={{ width: this.state.avance + '%' }}>{this.state.avance.toFixed(0)}%</div>
                </div>

            </div>
        );
    }

}

export default progressBar;
