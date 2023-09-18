import { Button } from "components/Button";

import logo from "static/icons/logo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.header__logo}>
               <img src={logo} alt="" />
               <p>TOP LANDING</p>
            </div>
            <div className={styles.header__phone}>
               <a href="tel:+380975246732" target="_blanc">+(380)975246732</a>
               <Button text="Request a call" />
            </div>
         </div>
      </header>
   )
};