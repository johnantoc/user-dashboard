import React, { useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";

const User = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Name");

  const onChangeHandler = (ev) => {
    const val = ev?.target?.value || "";
    setSearch(val);
  };

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
        <UserList />
      </section>
    </>
  );
};

export default User;
