import React from "react";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {pages.map((num) => (
          <li
            className="page-item"
            key={num}
            onClick={(e) => handleClick(e, num)}
          >
            <a className="page-link" href="/#" id={`a${num}`}>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
