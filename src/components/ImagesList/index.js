import React, { Component } from "react";
import callInstagramApi from "../../services/api/Instagram";

class ImagesList extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    callInstagramApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }

  render() {
      
    return (
      <div className="App">
        ({
            console.log(this.state.response)
        })
      
      </div>
    );
  }
}

export default ImagesList;
