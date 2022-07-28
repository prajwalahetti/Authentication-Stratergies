import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { googlelogin, githublogin } from "../../actions/auth";
//import {facebooklogin} from "../../actions/auth";
const Login = ({ googlelogin, githublogin, facebooklogin }) => {
  const googleAuth = () => {
    googlelogin();
  };
  const githubAuth = () => {
    githublogin();
  };
  // const facebookAuth = () => {
  //   facebooklogin();
  // };
  return (
    <div className="container">
      <div style={{ marginBottom: "2rem" }}>
        <h3>SignIn/SignUp using </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "18rem",
          }}
        >
          <button onClick={googleAuth} className="button">
            <div className="googlelogo"></div>
          </button>
          <button onClick={githubAuth} className="button">
            <div className="githublogo"></div>
          </button>

          {/* <button onClick={facebookAuth} className="button">
            <div className="facebooklogo"></div>
          </button> */}
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  googlelogin: PropTypes.func.isRequired,
  githublogin: PropTypes.func.isRequired,
  // facebooklogin: PropTypes.func.isRequired,
};

export default connect(null, { googlelogin, githublogin })(Login);
// export default connect(null, { googlelogin, githublogin, facebooklogin })(
//   Login
// );
