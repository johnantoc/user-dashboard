import React from "react";
import PropTypes from "prop-types";

import InfoCard from "../components/InfoCard";

function CompanyInfo({ userDetail }) {
  return (
    <InfoCard title="Contact Info">
      <div>
        Username: <span>{`${userDetail?.username || ""}`}</span>
      </div>
      <div>
        Email:{" "}
        <a
          href={`mailto:${userDetail?.email || ""}`}
          className="text-decoration-none"
        >{`${userDetail?.email || ""}`}</a>
      </div>
      <div>
        Phone:{" "}
        <a
          href={`tel:${userDetail?.phone || ""}`}
          className="text-decoration-none"
        >{`${userDetail?.phone || ""}`}</a>
      </div>
      <div>
        Website:{" "}
        <a
          href={`${userDetail?.website || ""}`}
          className="text-decoration-none"
        >{`${userDetail?.website || ""}`}</a>
      </div>
    </InfoCard>
  );
}

CompanyInfo.defaultProps = {
  userDetail: {
    username: "",
    email: "",
    phone: "",
    website: "",
  },
};

CompanyInfo.propTypes = {
  userDetail: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
};

export default CompanyInfo;
