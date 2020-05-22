import React, { Component } from 'react';
import Paises from './paises';

export default class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paises: props.paises,
            buscarPais: props.buscarPais
        }
    }

    colocarPais = (nombrePais) => {
        this.props.colocarPais(nombrePais);
    }

    render() {

        var paisesArray = this.props.paises.geonames;
        var paises = '';

        if (this.props.buscarPais) {
            paises = <Paises buscarPais={this.props.buscarPais} paises={paisesArray} colocarPais={this.colocarPais} />;
        }

        if (paisesArray) {

            return (

                <div className='form-group col-sm-12 col-md-6'>

                    <label className='font-weight-bold'>{this.props.label}</label>

                    <div className='input-group'>

                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className={"fa " + this.props.icono}></i></span>
                        </div>

                        <input className='form-control' type='text' placeholder='Pais'
                            id='pais' onChange={this.props.handle_OnChange} />
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            {paises}
                        </div>
                    </div>

                </div>
            )

        }

        else {

            return (
                <div> Loading ... </div>
            )
        }

    }
}