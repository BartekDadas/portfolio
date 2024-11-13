import React from "react";
import { ImgProps } from "types";

const Img: React.FC<ImgProps> = ({ 
  className, 
  src = "defaultNoData.png", 
  onClick, 
  alt = "testImg", 
  ...restProps 
}) => {
  return (
    <img 
      className={className} 
      onClick={onClick} 
      src={src} 
      alt={alt} 
      {...restProps} 
      loading="lazy" 
    />
  );
};

export { Img };