import React from "react";
import Header from '../../components/TopHeader';
import NotFoundImage from "../../assets/img/Error404.jpg";

const fullBackgroun = {
    background: `url(${NotFoundImage}) no-repeat center center`,
    backgroundSize: 'cover'
}

const NotFound = () => (
  <div className="animated fadeIn">
    <div className="home-header" style={fullBackgroun}>
      <div className=" has-text-centered">
        <Header
          title={
            <strong className="has-text-primary">
              404
            </strong>
          }
          subTitle={
            <div>
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
