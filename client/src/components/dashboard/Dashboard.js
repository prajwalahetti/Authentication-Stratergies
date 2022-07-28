import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ auth: { user } }) => {
  return (
    <div className="container">
      <h3>Welcome</h3>
      <h1>{user.displayName}</h1>
      <h3>{user.googleId}</h3>
      <h3>{user.githubId}</h3>
      <h3>{user.emailId}</h3>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Dashboard);
