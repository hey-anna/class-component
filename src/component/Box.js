// Box 컴포넌트
// rafce 단축키
import React from "react";

const Box = (props) => {
  //   console.log("props:", props);
  return (
    <div className="box">
      Box{props.num}
      <p>{props.name}</p>
    </div>
  );
};

export default Box;
