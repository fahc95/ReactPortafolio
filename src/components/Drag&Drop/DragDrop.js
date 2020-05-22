import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

export default class DragandDrop extends React.Component {
    constructor(props) {
        super(props);
        const min = 9;
        const max = 32;
        const numelementos = Math.floor(Math.random() * (max - min + 1)) + min;
        const categorias = ['nuevos', 'aceptados']
        var elementosInit = []

        for (let index = 1; index <= numelementos; index++) {
            elementosInit.push({
                name: 'Elemento ' + index,
                category: categorias[Math.floor(Math.random() * (2))]
            })
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
                elemento.category = cat;
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
                    className='card bg-light m-1'>
                    <small>{elemento.name}</small>
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h3><small className='text-primary'>Elementos</small></h3>
                <div className='container'>
                    <div className='row'>
                        <div className='border col-sm px-0'
                            onDragOver={this.onDragOver}
                            onDrop={(e) => { this.onDrop(e, "nuevos") }}>
                            <p className="bg-primary text-white my-0 py-0">Izquierda</p>
                            {elementos.nuevos}
                        </div>
                        <div className="border col-sm px-0"
                            onDragOver={this.onDragOver}
                            onDrop={(e) => this.onDrop(e, "aceptados")}>
                            <p className="bg-primary text-white my-0 py-0">Derecha</p>
                            {elementos.aceptados}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
