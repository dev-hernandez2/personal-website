import React from "react";

import Column from "../Grids/Column";

const ImgItem = ({ mediaSrc, mediaAlt }) => (
  <Column className="media-images" size="col is-one-quarter">
    <img src={mediaSrc} alt={mediaAlt} />
  </Column>
);

export default ImgItem;
