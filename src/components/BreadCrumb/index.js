import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./BreadCrumb.css";

/**
 * @description - List Item component.
 *
 * @param {Array} list - Breadcrumb links Array.
 *
 * @returns {ReactComponentElement} - Returns BreadCrumb.
 */
function BreadCrumb({ list }) {
  return list && list.length ? (
    <Breadcrumb className="fs-4 fw-bold justify-content-start align-items-center">
      {list.map((item, index) => {
        if (index === list.length - 1) {
          return (
            <BreadcrumbItem
              key={`${item.text}_${index}`}
              className="user-breadcrumb"
              active
            >
              {item.text}
            </BreadcrumbItem>
          );
        }
        return (
          <BreadcrumbItem
            key={`${item.text}_${index}`}
            className="user-breadcrumb"
          >
            <Link to={item.link} className="text-decoration-none">
              {item.text}
            </Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  ) : null;
}

BreadCrumb.defaultProps = {
  list: [],
};

BreadCrumb.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

export default BreadCrumb;
