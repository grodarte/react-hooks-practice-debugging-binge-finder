import React from "react";

function TVShow({image, selectShow, show}) {
  return (
    <div>
      <br />
      <img src={image.medium} onClick={()=>selectShow(show)} alt="" />
    </div>
  );
}

export default TVShow;
