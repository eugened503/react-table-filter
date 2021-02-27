import React, { useRef, useState } from "react";

function Header({ keyPressHandler }) {
  const ref = useRef(null);
  const [valueInput, setValueInput] = useState(null);

  const findInput = () => {
    let search = ref.current.value;
    keyPressHandler(search);
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="input-group mb-3 input_width">
      <input
        ref={ref}
        type="text"
        className="form-control"
        placeholder="Введите имя"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        onClick={findInput}
        disabled={!valueInput}
      >
        Button
      </button>
    </div>
  );
}

export default Header;
