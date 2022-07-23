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
    <div style={{marginBottom:"2rem"}}>
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
      <svg aria-hidden="true" style={{backgroundColor: "white",borderRadius:"5px"}} width="40" height="40" background-color="white" viewBox="0 0 18 18"><path d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z" fill="#4167B2"></path></svg>
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
