import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import PropTypes from "prop-types";

import ListItem from "../components/ListItem";
import { getUsersList } from "../utils/constants";

/**
 * @description - User List component.
 *
 * @param {String} search - Search String.
 * @param {String} sortBy - Sort By String.
 *
 * @returns {ReactComponentElement} - Returns User List.
 */
const UserList = ({ search, sortBy }) => {
  const [loader, setLoader] = useState(true);
  const [masterList, setMasterList] = useState([]);
  const [shownList, setShownList] = useState([]);

  // Component Did Mount.
  useEffect(() => {
    /**
     *  @description - Fetches the users list.
     *
     *  @returns {null} - Returns null.
     */
    (async () => {
      const response = await fetch(getUsersList);
      const data = await response.json();
      setMasterList(data);
    })();
  }, []);

  //Component Did Update.
  useEffect(() => {
    const filteredData =
      search !== ""
        ? masterList.filter((item) => {
            if (
              item.name.toLowerCase().includes(search) ||
              item.username.toLowerCase().includes(search) ||
              item.email.toLowerCase().includes(search)
            )
              return true;
            return false;
          })
        : [...masterList];

    const sortedData = filteredData.sort((a, b) => {
      const sortVal = sortBy.toLowerCase();
      const aVal = a[sortVal]?.toLowerCase();
      const bVal = b[sortVal]?.toLowerCase();
      if (aVal < bVal) return -1;
      else if (aVal > bVal) return 1;
      else return 0;
    });

    setShownList(sortedData);
    if (loader) setTimeout(() => setLoader(false), 500);
  }, [masterList, search, sortBy, loader]);

  // Shows a spinner while loading data.
  if (loader) {
    return (
      <div className="d-flex justify-content-center align-item-center w-100">
        <Spinner size="lg" color="primary" children="" />
      </div>
    );
  }

  return shownList.length && !loader ? (
    shownList.map(({ name, id, username, email }, index) => (
      <ListItem
        key={`${name}${id}`}
        image={""}
        name={name}
        username={username}
        email={email}
        bg={index % 2 === 0 ? "#fdf8f8" : "#fff"}
      />
    ))
  ) : (
    <div className="d-flex justify-content-center align-item-center w-100">
      <span>No User Found!</span>
    </div>
  );
};

UserList.propTypes = {
  search: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default UserList;
