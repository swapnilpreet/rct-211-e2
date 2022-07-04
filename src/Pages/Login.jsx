import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import styles from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("");
  // cityslicka
  const comingFrom = location.state?.from?.pathname || "/";
  // const comingFrom = location.state?.from?.pathname || "/shoes";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        navigate(comingFrom, { replace: true });
      });
    }
  };

  return (
    <div>
      <h2 className={styles.h2}>LOGIN</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            className={styles.input}
            onChange={(e) => setemail(e.target.value)}
            data-cy="login-email"
            type="email"
            value={email}/>
        </div>
        <div  className={styles.div1}>
          <label>User Password</label>
          <br/>
          <input
            onChange={(e) => setpassword(e.target.value)}
            className={styles.input}
            data-cy="login-password"
            type="password"
            value={password}/>
        </div>
        <button
          className={styles.btn1}
          type="submit"
          data-cy="login-submit"
        >{isLoading ? "LOADING" : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;