import React, { Component } from 'react';
import start from '../images/start.jpg';
import './start.css';

export default class Start extends Component {
    render() {
        return(
            <div className="row justify-content-center ml-0 mr-0">
                <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 pt-5 mt-5 text-center">
                    <img src={start} className="startimage" onClick={this.props.onClick} alt="start" />
                    <p className="starttext blink_me textspaced" onClick={this.props.onClick}>START GAME</p>
                </div>
            </div>
        )
    }
}