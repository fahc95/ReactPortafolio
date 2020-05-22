import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            contadorm: 0,
            contadorS: 0,
            contadorM: 0,
            contadorH: 0
        };
    }

    iniciarCronos = () => {
        this.interval = setInterval(this.cronos, 10)
    }

    stopCronos = () => {
        clearInterval(this.interval);
    }

    resetCronos = () => {
        clearInterval(this.interval);
        this.setState((prevState) => {

            return {
                contadorm: 0,
                contadorS: 0,
                contadorM: 0,
                contadorH: 0
            }
        })
    }

    cronos = () => {

        this.setState((prevState) => {
            var tempContam = prevState.contadorm + 1
            var tempContaS = prevState.contadorS
            var tempContaM = prevState.contadorM
            var tempContaH = prevState.contadorH

            if (tempContam === 100) {
                tempContam = 0
                tempContaS = tempContaS + 1
            }

            if (tempContaS === 60) {
                tempContaS = 0
                tempContaM = tempContaM + 1
            }

            if (tempContaM === 60) {
                tempContaM = 0
                tempContaH = tempContaH + 1
            }

            return {
                contadorm: tempContam,
                contadorS: tempContaS,
                contadorM: tempContaM,
                contadorH: tempContaH
            }

        })
    }

    componentDidUpdate() {
        const valors = Number(document.getElementById('segundos').innerHTML)
        const valorM = Number(document.getElementById('minutos').innerHTML)
        const valorH = Number(document.getElementById('horas').innerHTML)

        if (valors < 10) document.getElementById('segundos').innerHTML = '0' + valors
        if (valorM < 10) document.getElementById('minutos').innerHTML = '0' + valorM
        if (valorH < 10) document.getElementById('horas').innerHTML = '0' + valorH
    }

    render() {
        return (
            <div className='bg-dark col-sm-12 col-md-4 col-lg-4 shadow mx-auto'>

                <h4 className='text-white font-weight-bold text-center my-2'>
                    <i class="fa fa-stopwatch mt-2"></i></h4>

                <div className='row bg-light font-weight-bolder mx-1 border rounded my-3'>

                    <div className='col-1 mx-auto' id='horas'>
                        {this.state.contadorH}
                    </div>

                    <div className='col-auto'> : </div>

                    <div className='col-1 mx-auto' id='minutos'>
                        {this.state.contadorM}
                    </div>

                    <div className='col-auto'> : </div>

                    <div className='col-1 mx-auto' id='segundos'>
                        {this.state.contadorS}
                    </div>

                    <div className='col-auto'> : </div>

                    <div className='col-1 mr-2' id='msegundos'>
                        {this.state.contadorm}
                    </div>

                </div>

                <div className='row'>

                    <div className='col-auto mx-auto my-2'>
                        <button type='submit' className='border border-white-50 btn btn-primary' onClick={this.iniciarCronos}>
                            Iniciar</button>
                    </div>

                    <div className='col-auto mx-auto my-2'>
                        <button type='submit' className=' border border-white-50 btn btn-danger' onClick={this.stopCronos}>
                            Stop</button>
                    </div>

                    <div className='col-auto mx-auto my-2'>
                        <button type='submit' className='border border-white-50 btn btn-warning' onClick={this.resetCronos}>
                            Reset</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
