import React, { Component } from 'react';
import fotoFHZ from '../../../public/FHZ-006.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './CV.css'

export default class CV extends Component {

    render() {

        return (

            <div className='container-fluid'>

                {/* CV HEADER */}
                <div className='row shadow p-3 mb-2 rounded'>

                    <div className='col-sm-12 col-md-2 text-center mb-3'>
                        <img className='pp img-thumbnail shadow mb-2 rounded' src={fotoFHZ}></img>
                    </div>

                    <div className='col-sm-12 col-md-4 text-center text-md-left my-auto font-wieght-bold pb-3'>
                        <h2>Freddy Hernández</h2>
                        <h4 className='text-primary'>Web & Mobile Developer</h4>
                    </div>

                    <div className='col-sm-12 col-md-4 pb-2 offset-md-1 my-auto border'>

                        <h4 className='text-center pt-3'>Información Básica</h4><hr />

                        <p><strong>Edad:</strong> 24 años</p>
                        <p><strong>Origen:</strong> Managua, Nicaragua</p>
                        <p><strong>Idiomas:</strong> Español (Nativo) - English (Advanced)</p>
                        <p><strong>Teléfono:</strong> +505 85182242</p>
                        <strong>Email:</strong><a href='mailto: fahc95@gmail.com'> fahc95@gmail.com</a>

                    </div>

                </div>

                {/* CV BODY */}
                <div className='row my-5'>

                    <div className='col-sm-12 col-md-7'>

                        <div className="accordion" id="accordionExample">

                            {/* CV Education */}
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0 ">
                                        <button className="btn btn-block text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Educación
                                    </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <h4>Colegio Hispano Nicaragüense</h4>
                                        <p className='text-secondary'> Bachiller en Ciencias y Letras</p>
                                        <p> Enero 2007 - Diciembre 2012</p>
                                    </div>
                                    <div className="card-body">
                                        <h4>Universidad Americana - UAM</h4>
                                        <p className='text-secondary'> Ingeniería en Sistemas de la Información</p>
                                        <p className='text-secondary'> Ingeniería en Gerencia Informática</p>
                                        <p className='text-success'> Cum Laudem</p>
                                        <p> Enero 2013 - Diciembre 2018</p>
                                    </div>
                                </div>
                            </div>

                            {/* CV Experience */}
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0 ">
                                        <button className="btn btn-block text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Experiencia
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">

                                    <div className="card-body">
                                        <h4>Seguros América S.A - Nicaragua</h4>
                                        <p className='text-secondary'>Analista BPM</p>
                                        <p> Febrero 2018 - Abril 2019</p>
                                        <ul>
                                            <li>Desarrollo y mantenimiento de plataforma de gestión de procesos de negocios utilizando el software <strong>Bizagi</strong></li>
                                            <li>Desarrollo de APIs en <strong>C#</strong> para el intercambio de datos entre una Base de datos <strong>SQL Server 2012</strong> y el sistema AS400 de la empresa. </li>
                                            <li>Asistencia Técnica en Bizagi.</li>
                                        </ul>
                                    </div>

                                    <div className="card-body">

                                        <h4>Saucy Piaffe - Canada</h4>
                                        <p className='text-secondary'>Front End Developer - Remoto</p>
                                        <p> Abril 2019 - Septiembre 2019</p>
                                        <ul>
                                            <li> Maquetación de páginas con diseño responsivo utilizando <strong> HTML5 - CSS3 - Bootstrap </strong></li>
                                            <li> Administración de catálogo de productos a través de WooCommerce - WordPress</li>
                                            <li>Asistencia y Resolución de Problemas</li>
                                        </ul>

                                    </div>

                                    <div className="card-body">
                                        <h4>Tropical Music Nicaragua</h4>
                                        <p className='text-secondary'>Full Stack Developer</p>
                                        <p> Diciembre 2019 - Abril 2020</p>
                                        <ul>
                                            <li> Desarrollo de sistema inteligente de compras desarrollado en <strong> Node JS</strong>, con integración a sistema ERP de la empresa mediante APIs que se conectan a una Base de Datos <strong> SQL Server 2012 </strong> y realiza migración de datos a <strong> MongoDB </strong> para futura escalabilidad de la aplicación</li>
                                            <li> Front End desarrollado con <strong> HTML5 - Bootstrap -  Vanilla JavaScript ES6 </strong> </li>
                                            <li> Actualmente realizando 'Refactoring' para <strong> React JS </strong> </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='col-sm-12 col-md-4'>

                        {/* CV Tech Stack */}
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0 ">
                                    <button className="btn btn-block text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        Tech Stack
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>Bootstrap</li>
                                        <li>Vanilla JavaScript ES6</li>
                                        <li>React JS</li>
                                        <li>React Native</li>
                                        <li>Node JS</li>
                                        <li>SQL Server</li>
                                        <li>MongoDB</li>
                                        <li>Git / GitHub</li>
                                        <li>C#</li>
                                        <li>NPM</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        {/* CV Extracurricular */}
                        <div className="card">
                            <div className="card-header" id="headingFour">
                                <h2 className="mb-0 ">
                                    <button className="btn btn-block text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Extracurricular
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordionExample">

                                <div className="card-body">
                                    <h4> Valores</h4>
                                    <ul>
                                        <li>Rápido Aprendizaje</li>
                                        <li>Autodidacta</li>
                                        <li>Trabajo en Equipo</li>
                                        <li>Dedicado</li>
                                        <li>Responsable</li>
                                        <li>Facilidad para la Expresión Oral y la Comunicacion de Ideas</li>
                                    </ul>
                                </div>

                                <div className="card-body">
                                    <h4> Artístico-Cultural</h4>
                                    <ul>
                                        <li>Ingenieria en Sonido</li>
                                        <li>Músico: Multi-Instrumentista</li>
                                        <li>Productor Musical Profesional: Ableton Live Certified</li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}