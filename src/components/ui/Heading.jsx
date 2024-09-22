import React from "react";

const sizes = {
  headingxs: "text-[24px] font-bold md:text-[22px]",
  headings: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
