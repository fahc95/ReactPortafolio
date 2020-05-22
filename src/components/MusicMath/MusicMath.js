import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const stRatio = 1.0594630943592953;

export default class musicMathApp extends Component {

    state = {
        rootFreq: 440
    }

    click_rootFreqChange(e) {
        this.build();
    }

    build = () => {
        this.setState({
            rootFreq: this.rootFreq.value
        })
    }

    render() {

        // function Octaves(nota) {

        //     var aux = nota;
        //     var d = -12; // Octae Down Formula
        //     var Fo = []; // Fq Array
        //     Fo.push(nota);

        //     //Down Octaves
        //     while (aux > 0.01) {
        //         aux = Math.fround(aux * Math.pow(stRatio, d)).toFixed(4);
        //         Fo.push(aux);
        //     }
        //     //Cleaning Varianles
        //     aux = nota;
        //     d = 12;
        //     //Up Octaves
        //     while (aux < 20000) {
        //         aux = Math.fround(aux * Math.pow(stRatio, d)).toFixed(4);
        //         if (aux < 20000) Fo.push(aux);
        //     }

        //     // Sorting from < to >
        //     Fo.sort(function (a, b) { return a - b; });
        //     return Fo;
        // }

        function BuildChromaticScale(nota, ratio) {

            //Variables
            var aux = nota;
            var chomaticScaleFreqs = [];

            //Push root frequency
            chomaticScaleFreqs.push(nota);

            //Building Chromatic Scale // 12 tones in nature 
            for (var i = 1; i <= 12; i++) {
                aux = Math.round(nota * Math.pow(ratio, i).toFixed(4));
                chomaticScaleFreqs.push(aux);
            }
            return chomaticScaleFreqs;
        }

        let chromaticScale = BuildChromaticScale(this.state.rootFreq, this.props.ratio).map((freq, index) => {
            return (
                <div className='row ml-1' >

                    <div className='col-4 border'>{'Nota: ' + index}</div>

                    <div className='col-4 border'>{freq + ' Hz'}</div>

                </div>
            )
        })

        return (
            <div className='row col-4'>

                <div className='container'>

                    <div className='input-group py-3'>

                        <div className='input-group-prepend'>

                            <span className='input-group-text'>Frecuencia</span>
                            <input className='form-control col-3' id='rootFreq' type='text'
                                placeholder='440' ref={input => this.rootFreq = input} />
                            <button className='btn btn-primary text-white ml-1 rounded'
                                onClick={(e) => this.click_rootFreqChange(e)}>Go</button>

                        </div>

                    </div>

                    {chromaticScale}

                </div>

            </div>
        )
    }


}