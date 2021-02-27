import React from "react";

function Spinner(props) {
  return (
    <div className="text-center spinner-center">
      <div className={`${props.isSpinner}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
