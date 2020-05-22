import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

export default class exDragDrop extends Component {

    constructor(props) {
        super(props);
        const numElementos = 5;
        const categorias = ['nuevos', 'aceptados'];
        this.mover = null;
        this.sobre = null;
        this.colocarAqui = document.createElement('li');
        this.colocarAqui.className = 'colocaraqui bg-warning text-white';
        var elementosInit = [];

        for (let index = 1; index <= numElementos; index++) {
            elementosInit.push({
                name: 'Elemento ' + index,
                category: categorias[0]
            });
        }
        this.state = { elementos: elementosInit }
    }

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let elementos = this.state.elementos.filter((elemento) => {
            if (elemento.name == id) {
                elemento.category = cat
            }
            return elemento;
        });

        this.setState({
            ...this.state,
            elementos
        });
    }

    render() {

        var elementos = {
            nuevos: [],
            aceptados: []
        }

        this.state.elementos.forEach((elemento) => {

            elementos[elemento.category].push(
                <div key={elemento.name}
                    onDragStart={(e) => this.onDragStart(e, elemento.name)}
                    draggable
                    className='card bg-dark text-white m-1 p-4'>
                    {elemento.name}
                </div>
            );
        });

        return (
            <div className='container-drag'>
                <h3 className='text-center mt-2 mb-4'><small className='text-center'>Elementos</small></h3>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='border col-sm px-0'
                            onDragOver={this.onDragOver}
                            onDrop={(e) => { this.onDrop(e, "nuevos") }}>
                            <p className='border my-0 py-0'>Grupo 1</p>
                            {elementos.nuevos}
                        </div>
                        <div className='border col-sm px-0'
                            onDragOver={this.onDragOver}
                            onDrop={(e) => this.onDrop(e, "aceptados")}>
                            <p className='border my-0 py-0'>Grupo 2</p>
                            {elementos.aceptados}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}