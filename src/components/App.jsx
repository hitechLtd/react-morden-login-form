import React from "react";
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";


const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with </h2>
      <SocialLogin/>
      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail"/>

        <InputField type="password" placeholder="password" icon="lock"/>

        <a href="#" className="forgot-password">Forgot password?</a>
        <button className="login-button">Log in</button>
      </form>
         <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
      </p>
    </div>
  )
}
export default App;