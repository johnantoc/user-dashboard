import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Loader from "../components/Loader";
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
  const history = useHistory();

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
    let timeout = null;
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
    if (loader) timeout = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(timeout);
  }, [masterList, search, sortBy, loader]);

  /**
   * @description - Moves to user details screen.
   *
   * @returns {null} - Returns null.
   */
  const showUserDetails = (id) => {
    history.push(`/user/${id}`);
  };

  // Shows a spinner while loading data.
  if (loader) return <Loader />;

  return shownList.length && !loader ? (
    shownList.map(({ name, id, username, email }, index) => (
      <ListItem
        key={`${name}${id}`}
        image={""}
        id={id}
        name={name}
        username={username}
        email={email}
        onClick={showUserDetails}
        bg={index % 2 === 0 ? "#fdf8f8" : "#fff"}
      />
    ))
  ) : (
    <div className="d-flex justify-content-center align-item-center w-100">
      <span>No User Found!</span>
    </div>
  );
};

UserList.defaultProps = {
  search: "",
  sortBy: "Name",
};

UserList.propTypes = {
  search: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default UserList;
