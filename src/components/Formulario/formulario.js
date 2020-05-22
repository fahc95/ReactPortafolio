import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Campo from './campo';
import Select from './select';


export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buscarPais: '',
            isLoaded: false,
            paises: []
        }
    }

    handle_OnChange = (e) => {
        const nombrePais = e.target.value;
        if (nombrePais.length > 2) {
            this.setState({ buscarPais: nombrePais });
        }
    }

    colocarPais = (nombrePais) => {
        document.getElementById('pais').value = nombrePais;
        this.setState({
            buscarPais: '',
        })
    }

    componentDidMount() {
        fetch('http://api.geonames.org/countryInfoJSON?lang=es&username=react_example')
            .then((response) => {
                return response.json();
            })
            .then((paisesJson) => {
                this.setState({
                    paises: paisesJson,
                    piasesLoaded: true
                })
            });
    }

    render() {

        var { buscarPais, piasesLoaded, paises } = this.state;

        if (piasesLoaded) {

            return (

                <div className="container-fluid border rounded col-sm-11 col-md-6 my-4 mx-auto" >

                    <form>

                        <div className='form-row'>
                            <div className='h1 text-center mx-auto'>{this.props.formName}</div>
                        </div>
                        <hr></hr>

                        <div className='form-row mt-2'>

                            {
                                this.props.campos.map((campo, index) =>
                                    <Campo key={index} paises={paises} campoGrande={campo.grande} tipo={campo.tipo} icono={campo.icono} label={campo.nombre} index={index} />
                                )
                            }

                            {
                                <Select paises={paises} colocarPais={this.colocarPais} handle_OnChange={this.handle_OnChange} buscarPais={buscarPais} label='Pais de Origen:' icono='fa-globe fa-fw' />
                            }

                        </div>

                    </form>

                </div>
            )
        }

        else

            return (
                <div> Loading ... </div>
            )
    }
}