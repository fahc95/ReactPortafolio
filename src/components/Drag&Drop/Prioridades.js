import React, { Component } from 'react'

export default class Prioridades extends Component {
    constructor(props) {
        super(props);
        this.state = { mensajes: this.props.data };
        this.mover = null;
        this.sobre = null;
        this.colocaraqui = document.createElement("li");
        this.colocaraqui.className = "colocaraqui bg-warning text-white";
    }

    dragStart = (e) => {
        this.mover = e.currentTarget;
        e.dataTransfer.setData('text/html', e.currentTarget);
    }

    dragEnd = (e) => {
        this.mover.style.display = "block";
        this.mover.parentNode.removeChild(this.colocaraqui);
        var mensajesTemp = this.state.mensajes;
        var from = Number(this.mover.dataset.id);
        var to = Number(this.sobre.dataset.id);
        if (from < to) to--;
        if (this.dondeColocar == "after") to++;
        mensajesTemp.splice(to, 0, mensajesTemp.splice(from, 1)[0]);
        this.setState({ mensajes: mensajesTemp });
    }

    dragOver = (e) => {
        e.preventDefault();
        this.mover.style.display = "none";
        if (e.target.className == "colocaraqui") {
            return;
        }
        if (e.target.dataset.id)
            this.sobre = e.target;
        var relY = e.clientY - this.sobre.offsetTop;
        var height = this.sobre.offsetHeight / 2;
        var parent = e.target.parentNode;

        if (relY > height) {
            this.dondeColocar = "after";
            parent.insertBefore(this.colocaraqui, e.target.nextElementSibling);
        }
        else if (relY < height) {
            this.dondeColocar = "before"
            parent.insertBefore(this.colocaraqui, e.target);
        }
    }

    render() {
        var listItems = this.state.mensajes.map(((item, i) => {
            return (
                <li className='mb-1 bg-primary text-white'
                    data-id={i}
                    value={i}
                    key={i}
                    draggable="true"
                    onDragEnd={this.dragEnd}
                    onDragStart={this.dragStart}>
                    {item}
                </li>
            );
        }).bind(this));

        return (
            <div className="container-drag mx-5 px-5">
                <h3><small className='text-primary'>Prioridades</small></h3>
                <div className='mx-5 px-5'>
                    <ul onDragOver={this.dragOver}>{listItems}</ul>
                </div>
            </div>
        )
    }
};