import React, { Component } from "react";
import Project from "../components/project.js";
import { projectData } from "../projectData";
import "./projects.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectID: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const projectID = e.target.id;
    this.setState({ projectID: projectID });
  }

  render() {
    const selectedProject = this.state.projectID;

    return (
      <div className="col-xs-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-5 pb-5">
        <div className="row justify-content-center pb-4">
          <div class="dropdown">
            <button
              class="btn btn-retro dropdown-toggle textspaced textlarge"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Mission Select
            </button>
            <div
              class="dropdown-menu raleway text-center"
              aria-labelledby="dropdownMenuButton"
            >
              {projectData.map((project, index) => {
                return (
                  <button
                    class="dropdown-item"
                    onClick={this.handleClick}
                    id={index}
                  >
                    {project.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pagebox shadow-lg row justify-content-center pr-0 pl-0">
          {this.state.projectID ? (
            <Project data={projectData[selectedProject]} />
          ) : (
            <h2 className="col-12 text-center textyellow textspaced pt-5 mt-5">
              Please select a mission above.
            </h2>
          )}
        </div>
      </div>
    );
  }
}
