import React from "react";

import { Container } from "./styles";

function Pagination({
  meetups,
  meetupsPerPage,
  handlePageChange,
  currentPage,
}) {
  let pages = [];

  const numberOfPages = Math.ceil(meetups.length / meetupsPerPage);

  if (numberOfPages === 1) return null;

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <Container>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={currentPage === page ? "active" : "normal"}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Pagination;
