import React, { Component } from 'react';
import './levelInfo.css';

export default class LevelInfo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    render() {
        return(
            <div className="gameinfo pt-2 pb-2">
                <div className="text-center">
                    <h4 className="textyellow textspaced">Current Level</h4>
                    <h3 className="textblue textspaced">{this.props.page}</h3>
                    <hr className="navbreak" />
                    <h5 className="return text-white textspaced blink_me_slow" id="MENU" onClick={this.handleClick} >Return To Menu</h5>
                </div>
            </div>
        )
    }
}