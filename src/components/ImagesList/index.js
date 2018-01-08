import React from "react";

const ImagesList = ({ media }) => (
  <div className="App">
    {// console.log(this.props.media)
    media.map(media => {
      return (
        <div key={media.id}>
          <img src={media.images.thumbnail.url} alt={media.caption.text} />
        </div>
      );
    })}
  </div>
);

export default ImagesList;
