import React, { Component } from "react";
import "./project.css";

export default class Project extends Component {
  render() {
    return (
      <div className="pr-0 pl-0">
        <div className="row justify-content-center pb-4 pt-3">
          <h1 className="textyellow textspaced">{this.props.data.title}</h1>
        </div>

        <div className="row justify-content-center pl-3 pr-3">
          <div className="col-xs-12 col-md-6">
            <div class="pb-4">
              <a target="_blank" href={this.props.data.link} rel="noreferrer">
                <img
                  src={this.props.data.image}
                  className="img-fluid project-image"
                  alt="project"
                />
              </a>
            </div>

            <div className="row justify-content-center pb-5">
              <a
                className="raleway pr-3"
                target="_blank"
                href={this.props.data.link}
                rel="noreferrer"
              >
                <button className="btn-site">Launch Site</button>
              </a>

              <a
                className="raleway pl-3"
                target="_blank"
                href={this.props.data.github}
                rel="noreferrer"
              >
                <button className="btn-site">Source Code</button>
              </a>
            </div>

            {this.props.data.test_user && (
              <div className="justify-content-center pb-4 user_details">
                <h3 className="textyellow textspaced">Login Details:</h3>
                <h5 className="text-white raleway">
                  User: {this.props.data.test_user}
                  <br />
                  Password: {this.props.data.test_password}
                  <br />
                  {this.props.data.cc && (
                    <div>
                      Credit Card: {this.props.data.cc.number}
                      <br />
                      Expiration: {this.props.data.cc.expiration}
                      <br />
                      CVV: {this.props.data.cc.cvv}
                      <br />
                      {this.props.data.cc.billing && (
                        <div>Billing: {this.props.data.cc.billing}</div>
                      )}
                    </div>
                  )}
                </h5>
              </div>
            )}
          </div>

          <div className="col-xs-12 col-md-5 pl-3">
            <h4 className="textyellow textspaced">Mission Brief:</h4>
            <p className="raleway text-white">{this.props.data.description}</p>

            <h4 className="textyellow textspaced">Warning:</h4>
            <p className="raleway text-white">{this.props.data.warning}</p>

            <h4 className="textyellow textspaced pt-3">Technologies:</h4>
            <p className="raleway text-white">{this.props.data.technologies}</p>

            <h4 className="textyellow textspaced pt-3">Created:</h4>
            <p className="raleway text-white">{this.props.data.date_created}</p>
          </div>
        </div>
      </div>
    );
  }
}
