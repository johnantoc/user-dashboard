import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
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
      <section className="container pt-3 pb-3">
        {userDetail ? (
          <BreadCrumb
            list={[
              { text: "Users", link: "/" },
              { text: userDetail.name, link: "" },
            ]}
          />
        ) : null}
      </section>
      <section className="container pt-3 pb-3"></section>
    </>
  );
};

export default UserDetails;
