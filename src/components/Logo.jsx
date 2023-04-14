import React from "react";
import Icon from "./Icon";

const Logo = ({ flag, handleFlag }) => {
  return (
    <div className="submit d-flex flex-row align-items-center justify-content-center py-3">
      <hr />
      <div
        onClick={(_) => handleFlag()}
        className="icon-container order-sm-last"
      >
        <Icon />
      </div>
      <hr />
    </div>
  );
};

export default Logo;
