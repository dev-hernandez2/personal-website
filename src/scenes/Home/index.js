import React, { Component } from 'react';


import TopHeader from '../../components/TopHeader';


class Home extends Component {
  render() {


    return (

      <div className="home-header">
         <TopHeader
            title="Hello, world"
            subTitle={["Hello, my name is William Hernandez and I am a  ", <strong className="has-text-primary">Full Stack Developer</strong>,  " who loves to build Digital Products and is ..."]}
            HasButton={true}
            buttonStyles="p-5 is-primary is-large display-flex"
            buttonHref="https://reactjs.org/docs/components-and-props.html" 
            buttonText="Available for hire" 
        />
      </div>
    );
  }
}

export default Home;
