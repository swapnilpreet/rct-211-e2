import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.data.isAuth);
  return (
    <div className={styles.div1}>
      <div data-cy="navbar-home-link" className={styles.div2}>
        <img src="/Adidas_Logo.png" alt="logo" className={styles.img1} />
      </div>
      {!isAuth && (
        <div>
          <button data-cy="navbar-login-button" className={styles.btn1}>
            <Link to="/login" className={styles.link1}>
              LOGIN
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
