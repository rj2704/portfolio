import React, { Component } from 'react';
import './avatar.css';
import avatar from '../images/avatar.jpg';


export default class Avatar extends Component {
    render() {
        return(
            <div className="avatar-container">
                <div className="row justify-content-center mt-0">
                    <img src={avatar} className="avatar" alt="avatar" />
                </div>
                <div className="socialicons d-flex justify-content-center justify-content-around pt-2">
                    <a href="https://github.com/rj2704" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-github"><i class="fa fa-github"></i></span></a>
                    <a href="mailto:jigarrathod2704@gmail.com" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-mail_outline"><i class="fa fa-envelope"></i></span></a>
                    <a href="https://www.linkedin.com/in/jigar2704/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-linkedin-square"><i class="fa fa-linkedin-square"></i></span></a>
                </div>
            </div>
        )
    }
}