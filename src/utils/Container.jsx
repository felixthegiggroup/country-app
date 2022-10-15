import React from "react";

const Container = (props) => {
  return <div className="mx-auto w-[80%]">{props.children}</div>;
};

export default Container;
