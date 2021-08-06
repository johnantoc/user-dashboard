import React from "react";

import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import Seperator from "../components/Seperator";

const UserDetails = () => {
  return (
    <>
      <UserInfo />
      <div className="d-block d-lg-none">
        <Seperator />
      </div>
      <UserPosts />
    </>
  );
};

export default UserDetails;
