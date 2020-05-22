import React from 'react'
import PropTypes from 'prop-types';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';


export default class Modal extends React.Component {
    static propTypes = {
        isModalOpen: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className='modal container bg-white rounded m-5 w-50 h-25 shadow-lg'
                style={{ display: this.props.isModalOpen ? 'block' : 'none' }}>
                <div className='row rounded border bg-secondary text-white'>
                    <div className='col-11 h4'>Términos y Condiciones</div>
                    <div className='col-1' >
                        <button type="button" className="close" aria-label="Close"
                            onClick={this.props.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <br />
                <div>{this.props.children}</div>
                <br />
            </div>
        );
    }
}


