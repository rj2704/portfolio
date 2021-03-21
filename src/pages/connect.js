import React, { Component } from "react";
import "./connect.css";

export default class Connect extends Component {
  render() {
    return (
      <div className="col-12 row justify-content-center ml-0 mr-0 pl-0 pr-0">
        <div className="col-lg-3 col-xs-12 socialbox text-center shadow-lg pt-5 mb-4 mr-3 ml-3">
          <h1 className="textpink textspaced">GitHub</h1>
          <a
            href="https://github.com/rj2704"
            target="_blank"
            rel="noreferrer"
            className="socialicon-large"
          >
          <span className="icon-github"><i class="fa fa-github"></i></span>
          </a>
          <hr className="navbreak" />
          <p className="text-white raleway pt-4">
            Check out the source code for some cool projects, including this
            portfolio!
          </p>
        </div>

        <div className="col-lg-3 col-xs-12 socialbox text-center shadow-lg pt-5 mb-4 mr-3 ml-3">
          <h1 className="textpink textspaced">Email</h1>
          <a
            href="mailto:jigarrathod2704@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="socialicon-large"
          >
            <span className="icon-mail_outline socialicon-large"><i class="fa fa-envelope"></i></span>
          </a>
          <hr className="navbreak" />
          <p className="text-white raleway pt-4">
            Interested in working together? <br /> Reach out and let's connect
            today.
          </p>
        </div>

        <div className="col-lg-3 col-xs-12 socialbox text-center shadow-lg pt-5 mb-4 mr-3 ml-3">
          <h1 className="textpink textspaced">LinkedIn</h1>
          <a
            href="https://www.linkedin.com/in/jigar2704/"
            target="_blank"
            rel="noreferrer"
            className="socialicon-large"
          >
            <span className="icon-linkedin-square"><i class="fa fa-linkedin-square"></i></span>
          </a>
          <hr className="navbreak" />
          <p className="text-white raleway pt-4">
            Want to share networks and learn more? <br /> Reach out on LinkedIn.
          </p>
        </div>
      </div>
    );
  }
}
