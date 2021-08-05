import React, { useState, useEffect } from "react";

import ListItem from "../components/ListItem";

const UserList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setLists(data);
    })();
  }, []);

  return (
    lists.length &&
    lists.map(({ name, id, username, email }, index) => (
      <ListItem
        key={`${name}${id}`}
        image={""}
        name={name}
        username={username}
        email={email}
        bg={index % 2 === 0 ? "#fdf8f8" : "#fff"}
      />
    ))
  );
};

export default UserList;
