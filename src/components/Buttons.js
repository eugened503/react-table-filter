import React from "react";

function Buttons(props) {
  function getSmallList() {
    props.handleSmallVolume();
  }

  function getLargeList() {
    props.handleBigVolume();
  }

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          onClick={getSmallList}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          32 элемента
        </label>

        <input
          type="radio"
          className="btn-check "
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          onClick={getLargeList}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          1000 элементов
        </label>
      </div>
    </>
  );
}

export default Buttons;
