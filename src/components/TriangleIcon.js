import React from "react";

function TriangleIcon(props) {
  return (
    <svg
      className={props.triangle ? `table__svg_position` : `table__svg`}
      id="i-caret-top"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="20"
      height="20"
      fill="black"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M30 22 L16 6 2 22 Z" />
    </svg>
  );
}

export default TriangleIcon;
