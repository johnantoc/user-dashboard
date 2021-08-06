import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import { getUserDetail } from "../utils/constants";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    /**
     *  @description - Fetches the users details.
     *
     *  @returns {null} - Returns null.
     */
    (async () => {
      const response = await fetch(`${getUserDetail}${id}`);
      const data = await response.json();
      setUserDetail(data);
    })();
  }, [id]);
  return (
    <>
      <UserInfo userDetail={userDetail} />
      <UserPosts name={userDetail?.name} />
    </>
  );
};

export default UserDetails;
