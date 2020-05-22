import React, { Component, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Modal from './modal';
import Place from './Place'

import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class APIMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            photo: '',
            isModalOpen: false,
            isInnermodalOpen: false
        };
    }

    term = 'Estos son los términos y condiciones de la aplicación';
    map = '';

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
        document.body.className = 'normalPage'
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
        document.body.className = 'overlay'
    }

    componentDidMount() {

        const googlePlaceAPILoad = setInterval(() => {
            if (window.google) {
                this.google = window.google;
                clearInterval(googlePlaceAPILoad);
                console.log('Load Place API');
                const mapCenter = new this.google.maps.LatLng(4.624335, -74.064644);
                this.map = new this.google.maps.Map(document.getElementById('gmapContainer'), {
                    center: mapCenter,
                    zoom: 15
                });
                var marcador = new this.google.maps.Marker({ position: mapCenter, map: this.map })
            };
        }, 100);
    }

    showMap(mapCenter) {
        // The location of Uluru
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        var map = new window.google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: mapCenter });
        // The marker, positioned at Uluru
        var marker = new window.google.maps.Marker({ position: mapCenter, map: map });
    }

    handler_onClick = (e) => {
        let inputCiudad = document.getElementById('inputCiudad').value;

        const request = {
            query: inputCiudad,
            fields: ['photos', 'formatted_address', 'name', 'place_id']
        };

        this.service = new this.google.maps.places.PlacesService(this.map); // Definicion del servicio
        this.service.findPlaceFromQuery(request, this.findPlaceDetail); // Metodo de Google para Buscar lugar

        //Limpieza de campos
        document.getElementById('inputCiudad').value = '';
        document.getElementById('inputCiudad').placeholder = '';
    }


    findPlaceResult = (results, status) => {
        console.log('PlaceServiceStatus: ' + status);
        if (status === 'OK') {
            results.map((place) => {
                console.log('Place name: ' + place.name + ' Place id: ' + place.place_id + ' Place address: ' + place.formatted_address);
                const placePhoto = place.photos[0].getUrl({ 'maxWidth': 500, 'maxHeight': 400 })
                this.setState({
                    photo: placePhoto,
                    direccion: place.formatted_address
                })
            })
        }
    }


    NEWfindPlaceResult = (results, status) => {
        var placesTemp = []
        var placeId = ''
        if (status === 'OK') {
            results.map((place) => {
                var placePhotos = ['']
                const placeTemp = {
                    id: place.place_id, name: place.name,
                    address: place.formatted_address, photos: placePhotos
                }
                placeId = place.place_id;
                placesTemp.push(<Place placeData={placeTemp} />);
            })
        }
        if (placesTemp.length > 0)
            this.findPlaceDetail(placeId);
        else {
            const placeTemp = {
                id: 'N/A', name: <div className='mt-5'><strong className='text-center'>
                    No hay resultados</strong></div>,
                address: '', photos: ['']
            }
            placesTemp.push(<Place placeData={placeTemp} />);
            this.setState({ places: placesTemp })
        }
    }

    findPlaceDetail = (placeIdFound) => {
        var request = {
            placeId: placeIdFound,
            fields: ['address_component', 'adr_address', 'alt_id', 'formatted_address',
                'icon', 'id', 'name', 'permanently_closed', 'photo', 'place_id', 'plus_code', 'scope',
                'type', 'url', 'utc_offset', 'vicinity', 'geometry']
        };
        this.service.getDetails(request, this.foundPlaceDatail);
    }

    foundPlaceDatail = (place, status) => {
        if (status === 'OK') {
            var placePhotos = ['']
            if (place.photos) {
                place.photos.map((placePhoto, index) => {
                    placePhotos[index] = placePhoto.getUrl({ 'maxWidth': 160, 'maxHeight': 120 })
                    if (index === 2) return;
                })
            }
            const placeTemp = {
                id: place.place_id, name: place.name,
                address: place.formatted_address, photos: placePhotos
            }
            const placesTemp = <Place placeData={placeTemp} />;
            console.log('address_component: ' + place.address_component,
                'adr_address: ' + place.adr_address, 'alt_id', 'formatted_address', 'geometry: ' + place.geometry,
                'icon: ' + place.icon, 'permanently_closed', 'photo',
                'type: ' + place.type, 'url: ' + place.url, 'utc_offset', 'vicinity')
            this.setState({ places: placesTemp })
            this.showMap(place.geometry.location);
        }
    }

    handleChange = address => {
        this.setState({
            address
        });
    }

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {

        return (

            <div className="App">

                <div id='gmapContainer'></div>

                <div className='container border rounded my-4'>

                    <h1 className='text-center font-weight-bold'> Google Places API </h1><hr></hr>

                    <div className='form-group col-12 text-center text-md-left'>

                        <label htmlFor='inputCiudad' className='font-weight-bold'>Indica algún lugar de Nicaragua: </label>

                        <div className='input-group col-sm-12 col-md-6'>

                            <input className='form-control' type='text' placeholder='Laguna de Apoyo' id='inputCiudad' />

                            <div className='btn btn-outline-success ml-2' onClick={this.handler_onClick}>Buscar</div>

                        </div>

                    </div>

                    <div className='row py-2'>
                        <div className='col-12 text-center'><img src={this.state.photo} className='img-fluid shadow mb-3 bg-white rounded border' /></div>
                    </div>

                    <div className='row text-md-left' >
                        <div className='col-sm-12'><strong>Dirección: </strong>{this.state.direccion}</div>
                    </div>

                    <div className='row my-2'>
                        <div className='col-8' id='term' onClick={this.openModal}>
                            <a href='#'>Términos y Condiciones</a>
                        </div>
                        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}>
                            <p><strong>{this.term}</strong></p>
                        </Modal>
                    </div>

                </div>
            </div>
        );
    }
}

