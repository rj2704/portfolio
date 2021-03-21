import React, { Component } from 'react';
import PlayerCard from '../components/playercard';

export default class Player extends Component {
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
            <div className="col-xs-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 pt-5 mt-5">
                <div className="menubox justify-content-center shadow-lg mb-5">
                    <h2 class="textyellow textspaced"><u>Player Select</u></h2>
                    <PlayerCard name="Jigar Rathod" onClick={this.handleClick} />
                    <hr className="navbreak"/>
                    <div className="nav-item textspaced" id="START" onClick={this.handleClick}>Restart</div>
                </div>
            </div>
        )
    }
}