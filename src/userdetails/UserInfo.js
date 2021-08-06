import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

import BreadCrumb from "../components/BreadCrumb";
import CompanyInfo from "./CompanyInfo";
import InfoCard from "../components/InfoCard";
import { getUserDetail } from "../utils/constants";

const UserInfo = () => {
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
              { text: userDetail?.name || "", link: "" },
            ]}
          />
        ) : null}
      </section>
      <section className="container pt-3 pb-3">
        {userDetail ? (
          <Row>
            <Col xs={12} lg={4}>
              <CompanyInfo userDetail={userDetail} />
            </Col>
            <Col xs={12} lg={4}>
              <InfoCard
                title="Address"
                text={`${userDetail?.address?.suite || ""} ${
                  userDetail?.address?.street || ""
                }, ${userDetail?.address?.city || ""}, ${
                  userDetail?.address?.zipcode || ""
                }`}
              />
            </Col>
            <Col xs={12} lg={4}>
              <InfoCard title="Company">
                <div>
                  <span>{`${userDetail?.company?.name || ""}`}</span>
                </div>
                <div>
                  <span>{`${userDetail?.company?.bs || ""}`}</span>
                </div>{" "}
                <div>
                  <i>
                    <span>{`"${userDetail?.company?.catchPhrase || ""}"`}</span>
                  </i>
                </div>
              </InfoCard>
            </Col>
          </Row>
        ) : null}
      </section>
    </>
  );
};

export default UserInfo;
