import React from 'react'
import { render } from 'react-dom'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import moment from 'moment'

import Home from '../src/components/Home'
import Header from '../src/components/Header'
import Cronos from '../src/components/cronos'
import ProgressBar from '../src/components/Progressbar'
import ProjectManager from '../src/components/ProjectManager'
import MusicMath from '../src/components/MusicMath'
import Prestamos from '../src/components/Prestamos'
import Formulario from '../src/components/Formulario';
import DragDrop from '../src/components/Drag&Drop'
import MapsAPI from '../src/components/GoogleMapsAPI'

// Component Props
//Header
const tabs = [
    {
        nombre: 'Inicio',
        icono: 'fa-home'
    },

    {
        nombre: 'Log-in',
        icono: 'fa-user'
    },

    {
        nombre: 'Prestamos',
        icono: 'fa-money-bill-wave'
    },

    {
        nombre: 'Drag & Drop',
        icono: 'fas fa-project-diagram'
    },

    {
        nombre: 'Maps API',
        icono: 'fas fa-map-marked-alt'
    }

]

//Prestamos
const prestamos = [

    {
        cliente: 'Said Abdalah',
        prestamo: 1500,
        articulo: 'Moto',
        fechaContrato: '19/02/2018',
        fechaVence: '19/06/2018',
        complete: false
    },

    {
        cliente: 'Freddy Hernandez',
        prestamo: 1200,
        articulo: 'Laptop',
        fechaContrato: '20/10/2020',
        fechaVence: '20/12/2022',
        complete: false
    },

    {
        cliente: 'Sonia Castro',
        prestamo: 900,
        articulo: 'Móvil',
        fechaContrato: '09/03/2019',
        fechaVence: '09/06/2019',
        complete: false
    },

    {
        cliente: 'Sara Ortega',
        prestamo: 500,
        articulo: 'Móvil',
        fechaContrato: '15/03/2018',
        fechaVence: '15/06/2020',
        complete: false
    },

    {
        cliente: 'Alexande Evertz',
        prestamo: 9000,
        articulo: 'CDJ-NEXUS2000',
        fechaContrato: '09/03/2019',
        fechaVence: moment().format('L'),
        complete: false
    },
]

//Log-in - Formulario
const camposForm = [
    {
        nombre: 'Nombre',
        icono: 'fa-user fa-fw',
        tipo: 'text',
        grande: false
    },

    {
        nombre: 'Apellido',
        icono: 'fa-user fa-fw',
        tipo: 'text',
        grande: false
    },

    {
        nombre: 'Correo Electrónico',
        icono: 'fa-envelope fa-fw',
        tipo: 'email',
        grande: false
    },

    {
        nombre: 'Contraseña',
        icono: 'fa-key fa-fw',
        tipo: 'password',
        grande: false
    },

    {
        nombre: 'Dirección',
        icono: 'fa-home fa-fw',
        tipo: 'text',
        grande: true
    },

]

//Components
var coHome = <Home />
var coForm = <Formulario campos={camposForm} formName='Registro Personal' />;
var coDragDrop = <DragDrop />;
var coPrestamo = <Prestamos prestamos={prestamos} />
var coMaps = <MapsAPI />

//HEADER
render(
    <div>
        {<Header tabs={tabs} selectContent={showContent} />}
    </div>,
    document.getElementById('root')
);

var tabName = 'Inicio';
var content = coHome;
showContent(tabName); //Llama la pagina Inical

//CONTENT SELECTOR FUNCTION
function showContent(nombre) {
    tabName = nombre

    if (tabName == 'Inicio') {
        content = coHome;
        renderContent(content);
    }

    if (tabName == 'Log-in') {
        content = coForm;
        renderContent(content);
    }

    if (tabName == 'Drag & Drop') {
        content = coDragDrop;
        renderContent(content);
    }

    if (tabName == 'Maps API') {
        content = coMaps;
        renderContent(content);
    }

    if (tabName == 'Prestamos') {
        content = coPrestamo;
        render(
            <div className='row mt-4 border border-secondary shadow m-2 p-2'>

                <div className='col-12 mx-auto mb-3'>
                    {content}
                </div>

            </div>, document.getElementById('content'))
    }
}

function renderContent(content) {
    render(
        <div>
            {content}
        </div>,
        document.getElementById('content')
    )
}


