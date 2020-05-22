import React, { Component } from 'react';
import Pais from './Pais';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

export default class Paises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paises: props.paises
        }
    }

    colocarPais = (nombrePais) => {
        this.props.colocarPais(nombrePais);
    }

    render() {

        var paises = <option> Seleccione un País</option>
        var paisesArray = this.state.paises;

        if (this.props.buscarPais) {
            if (paisesArray) {
                console.log(paisesArray);
                paises = paisesArray.map((pais, index) => {
                    if (pais.countryName.toUpperCase().indexOf(this.props.buscarPais.toUpperCase()) === 0)
                        return <Pais countryCode={pais.countryCode} countryName={pais.countryName} key={index} colocarPais={this.props.colocarPais} />
                })
            }
        }

        return (
            <div className='list-group' id='lista_paises'>
                {paises}
            </div>
        )

    }
}
