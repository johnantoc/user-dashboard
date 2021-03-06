import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

import InfoCard from "../components/InfoCard";
import Seperator from "../components/Seperator";
import ErrorBoundary from "../components/ErrorBoundary";
import { getUserPosts } from "../utils/constants";

const UserPosts = ({ name }) => {
  const { id } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    /**
     *  @description - Fetches the users posts.
     *
     *  @returns {null} - Returns null.
     */
    (async () => {
      const response = await fetch(`${getUserPosts}?userId=${id}`);
      const data = await response.json();
      setUserPosts(data);
    })();
  }, [id]);

  /**
   *  @description - Changes the data Array for View.
   *
   *  @returns {Array} - Returns Array.
   */
  const getDataForView = () => {
    let finalDataArray = [];
    if (userPosts.length) {
      let start = 0;
      // 3 columns are needed.
      const noOfRows = Math.ceil(userPosts.length / 3);
      for (let rowNo = 0; rowNo < noOfRows; rowNo++) {
        let end = start + 3;
        finalDataArray.push(userPosts.slice(start, end));
        start += 3;
      }
    }
    return finalDataArray;
  };

  return (
    <ErrorBoundary>
      <section className="container pt-3 pb-3">
        <Row className="ps-2 ps-lg-0 mb-lg-3">
          <Col className="ps-4 ps-lg-2">
            <span className="fs-4 fw-bold">{`Posts by ${name}`}</span>
          </Col>
        </Row>
        {userPosts
          ? getDataForView().map((rowItems = [], rowInd) => {
              return rowItems && rowItems.length ? (
                <Row className="mb-sm-0 mb-lg-3" key={`row_${rowInd}`}>
                  {rowItems.map((colItem, colInd) => {
                    return colItem ? (
                      <Col
                        xs={12}
                        lg={4}
                        className="mb-2"
                        key={`col_${rowInd}_${colInd}`}
                      >
                        <InfoCard
                          key={colItem?.id}
                          title={`${colItem?.title || ""}`}
                          text={`${colItem?.body || ""}`}
                        />
                        <div className="d-block d-lg-none">
                          <Seperator />
                        </div>
                      </Col>
                    ) : null;
                  })}
                </Row>
              ) : null;
            })
          : null}
      </section>
    </ErrorBoundary>
  );
};

UserPosts.defaultProps = {
  name: "",
};

UserPosts.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserPosts;
