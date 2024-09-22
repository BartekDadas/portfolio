import React from "react";

const Img = ({ className, src = "defaultNoData.png", onClick, alt = "testImg", ...restProps }) => {
  return <img className={className} onClick={onClick} src={src} alt={alt} {...restProps} loading={"lazy"} />;
};
export { Img };
