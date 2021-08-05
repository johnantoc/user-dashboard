import React, { useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";

/**
 * @description - User Page component.
 *
 * @returns {ReactComponentElement} - Returns User Page.
 */
const User = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Name");

  /**
   * @description - Change Handler function - Sets the search value.
   *
   * @returns {null} - Returns null.
   */
  const onChangeHandler = (ev) => {
    const val = ev?.target?.value || "";
    setSearch(val);
  };

  /**
   * @description - Select Handler function - Sets the select value.
   *
   * @returns {null} - Returns null.
   */
  const onDropDownSelect = (ev) => {
    const val = ev?.target?.value || "Name";
    setSortBy(val);
  };

  return (
    <>
      <section className="container pt-3 pb-3">
        <UserForm
          search={search}
          sortBy={sortBy}
          onChangeHandler={onChangeHandler}
          onDropDownSelect={onDropDownSelect}
        />
      </section>
      <section className="container pt-3 pb-3">
        <UserList search={search} sortBy={sortBy} />
      </section>
    </>
  );
};

export default User;
