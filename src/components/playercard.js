import React, { Component } from 'react';
import me from '../images/me.jpg';
import './playercard.css';

export default class PlayerCard extends Component {
    render() {
        return (
            <div className="row justify-content-center pt-4 pb-4">
                <div className="playerborder" id="MENU" onClick={this.props.onClick}>
                    <img src={me} className="biopicture" alt="bio-pic" id="MENU" />
                    <h3 className="textyellow textspaced pt-3" id="MENU" >{this.props.name}</h3>
                </div>
            </div>
        )
    }
}