import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

import BreadCrumb from "../components/BreadCrumb";
import CompanyInfo from "./CompanyInfo";
import InfoCard from "../components/InfoCard";
import Seperator from "../components/Seperator";

const UserInfo = ({ userDetail }) => (
  <>
    <section className="container pt-3 pb-0">
      {userDetail ? (
        <Row className="ps-2 ps-lg-0">
          <Col className="ps-4 ps-lg-2">
            <BreadCrumb
              list={[
                { text: "Users", link: "/" },
                { text: userDetail?.name || "", link: "" },
              ]}
            />
          </Col>
        </Row>
      ) : null}
    </section>
    <section className="container pt-0 pb-3">
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

      {userDetail ? (
        <div className="d-block d-lg-none">
          <Seperator />
        </div>
      ) : null}
    </section>
  </>
);

UserInfo.defaultProps = {
  userDetail: {
    name: "",
    address: {
      suite: "",
      street: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
      bs: "",
      catchPhrase: "",
    },
  },
};

UserInfo.propTypes = {
  userDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      suite: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string,
      bs: PropTypes.string,
      catchPhrase: PropTypes.string,
    }).isRequired,
  }),
};

export default UserInfo;
