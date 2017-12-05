import React, { Component } from 'react'


import TopHeader from '../../components/TopHeader'


class Home extends Component {
  render() {
    return (

      <div className="home-header">
         <div className=" has-text-centered">
            <TopHeader
              title="Hello, world"
              subTitle={["Hello, my name is William Hernandez and I am a  ", <strong className="has-text-primary">Full Stack Developer</strong>,  " who loves to build Digital Products and is ..."]}
              HasButton={true}
              buttonStyles="is-primary is-large hvr-grow-shadow"
              buttonHref="https://reactjs.org/docs/components-and-props.html" 
              buttonText="Available for hire" 
            />
        </div>
      </div>
    )
  }
}

export default Home
