import React from "react";
import Header from '../../components/TopHeader';
import NotFoundImage from "../../assets/img/Error404.jpg";

//inline styles
const styles = {

  fullBackgroun: {
    background: `url(${NotFoundImage}) no-repeat center center`,
    backgroundSize: 'cover'
  },

  mainTextWhite: {
    color: 'white'
  }
   
}

const NotFound = () => (
  <div className="animated fadeIn">
    <div className="home-header" style={styles.fullBackgroun}>
      <div className=" has-text-centered">
        <Header
          title={
            <strong className="has-text-primary">
              404
            </strong>
          }
          subTitle={
            <div style={styles.mainTextWhite}>
              Some times adventures take you to
              unknown places...
            </div>
          }
          HasButton={true}
          buttonStyles="is-primary is-medium hvr-grow-shadow"
          buttonHref="/"
          buttonText="Go Back to Home"s
        />
      </div>
    </div>
  </div>
);

export default NotFound;
