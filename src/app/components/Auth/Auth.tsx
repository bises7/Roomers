import React, { useState } from "react";
import { NextPage } from "next";
import Login from "./Login";
import Register from "./Register";

interface Props {
  classnames: string;
}

const AuthComponent: NextPage<Props> = ({}) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  return (
    <>
      <Login
        className=""
        handleLoginShow={handleLoginShow}
        showLogin={showLogin}
        handleLoginClose={handleLoginClose}
        handleShowSignUp={handleShowSignUp}
      />

      <Register
        value="Get Started"
        handleCloseSignUp={handleCloseSignUp}
        handleShowSignUp={handleShowSignUp}
        showSignUp={showSignUp}
        handleLoginShow={handleLoginShow}
      />
    </>
  );
};

export default AuthComponent;
