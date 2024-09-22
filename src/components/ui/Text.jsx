import React from "react";

const sizes = {
  textxs: "text-[16px] font-normal not-italic",
  texts: "text-[18px] font-normal not-italic",
  textmd: "text-[40px] font-normal not-italic md:text-[38px] sm:text-[36px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
