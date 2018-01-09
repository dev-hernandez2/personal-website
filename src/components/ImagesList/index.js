import React from "react";

//row component
import Row from "../Grids/Row";
//Img Component
import ImgItem from "./ImgItem";

const ImagesList = ({ media }) => (
  <div className="instagram-gallery">
    <Row display="is-multiline">
      {media.map(media => (
        <ImgItem
          key={media.id}
          mediaSrc={media.images.standard_resolution.url}
          mediaAlt={media.caption.text}
        />
      ))}
    </Row>
  </div>
);

export default ImagesList;
