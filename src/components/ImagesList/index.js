import React from "react";
import Spinner from 'react-spinkit';

//row component
import Row from "../Grids/Row";
//Img Component
import ImgItem from "./ImgItem";
import SectionTitle from "../Section/SectionTile";
import Section from "../Section/Section";

const ImagesList = ({media}) => (
  <div className="instagram-gallery">
    <div className="section is-light-section is-small">
      <SectionTitle
        title="You can learn a little more about me at:"
        textColor="title is-3 color-regular"
        topLineColor="top-primary"/>
    </div>
    <Section>
      {(media.length > 0)
        ? <Row display="is-multiline">
            {media.map((media, i) => (<ImgItem
              key={i}
              mediaSrc={media.images.standard_resolution.url}
              mediaAlt={media.caption.text}/>))}
          </Row>
        : <Spinner name="ball-scale-multiple" color="aquamarine"/>
      }   

    </Section>
  </div>
);

export default ImagesList;
