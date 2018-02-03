import React, {Component} from 'react';

import projectsData from "../../services/data/projects"

class Project extends Component {
    state = {
        project: [],
        urlId: parseFloat(this.props.match.params.id)
    }

    componentDidMount() {
        this.setState({project: projectsData.find(p => p.id  ===  this.state.urlId)})
    }

    render() {
        const project = this.state.project;
    
        return (
            <div className="animated fadeIn">
               { project.mission }
            </div>
        )
    }
}

export default Project;