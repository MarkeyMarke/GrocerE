import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "./pagination.css"
const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="pagination-style">
      <nav>
        <ul className="pagination">
          <li id= "pageText">Page:</li>
          {pages.map(page => (
            <li
              key={page}
              className={page === currentPage ? "page-item active" : "page-item"}
            >
              <div className="page-link" style={page === currentPage ? {backgroundColor:" #9a0000", borderColor:" #9a0000"}:{}} onClick={() => onPageChange(page)}>
                {page}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
