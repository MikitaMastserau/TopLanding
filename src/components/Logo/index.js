import logo from "static/icons/logo.svg";

import styles from "./styles.module.scss";

export const Logo = () => {
   return (
      <div className={styles.logo}>
         <img src={logo} alt="" />
         <p>TOP LANDING</p>
      </div>
   )
};