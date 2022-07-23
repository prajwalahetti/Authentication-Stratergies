import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { googlelogin,githublogin,facebooklogin } from "../../actions/auth";

const Login = ({ setAlert, googlelogin,githublogin,facebooklogin }) => {
  const googleAuth = () => {
    googlelogin();
  };
  const githubAuth=()=>{
    githublogin();
  }
  const facebookAuth=()=>{
    facebooklogin();
  }
  return (
    <div className="container" >
    <div >
      <h1>Strategies available for SignIn/SignUp</h1>
    <div style={{marginBottom:"2rem",marginTop:"2rem"}}>
    <button  onClick={googleAuth} className="button">
      {" "}
      <div className="googlelogo"></div>
      
      <div className="sign-in-text">Sign in with Google</div>
    </button>
    </div>
   <div style={{marginBottom:"2rem"}}>
   <button onClick={githubAuth} className="button">
      {" "}
      <div className="githublogo"></div>
      <div className="sign-in-text">Sign in with Github</div>
    </button>
   </div>
   <div>
   <button onClick={facebookAuth} className="button">
      {" "}
      <div className="facebooklogo">
      </div>
      <div className="sign-in-text">Sign in with Facebook</div>
    </button>
   </div>
    </div>
  </div>
  );
};
Login.propTypes = {
  googlelogin: PropTypes.func.isRequired,
  githublogin: PropTypes.func.isRequired,
  facebooklogin:PropTypes.func.isRequired
};

export default connect(null, { googlelogin,githublogin,facebooklogin })(Login);
