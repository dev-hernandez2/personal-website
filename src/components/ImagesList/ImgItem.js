import React from "react";

import Column from "../Grids/Column";


const ImgItem = ({ mediaSrc, mediaAlt, mediaLink }) => (
  <Column className="media-images" size="col is-one-quarter">
    <a href={mediaLink} target="_black">
      <img src={mediaSrc} alt={mediaAlt} />
    </a>
  </Column>
);

export default ImgItem;
