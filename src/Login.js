import React, { useState } from "react";
import s from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //prevent refreshing in react

    //firebase login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //firebase register stuff
    //if success, auth object will be created
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          navigate("/home");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={s["login-page"]}>
      <div className={s["center"]}>
        <img
          className={s["logo"]}
          src="https://www.doorwaysva.org/wp-content/uploads/2020/08/amazon-logo-transparent.png"
          alt=""
          onClick={() => navigate("/home")}
        />
        <div className={s["box"]}>
          <form className={s["box-center"]}>
            <h2>Sign-In</h2>
            <div className={s["label"]}>Email</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={s["label"]}>Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={s["login-btn"]} type="submit" onClick={signIn}>
              Continue
            </button>

            <div className={s["small"]}>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice
            </div>
            <div className={s["help"]}>Need help?</div>
          </form>
        </div>

        <div className={s["bottom-part"]}>
          <div className={s["new"]}>New to Amazon?</div>
          <button className={s["create-btn"]} onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
