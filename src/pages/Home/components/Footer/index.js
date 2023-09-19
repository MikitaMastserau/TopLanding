import { useCallback } from "react";

import { Logo } from "components/Logo";

import arrowUp from "static/icons/arrowUp.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
   const scrollTop = useCallback(() => {
      window.scroll({
         behavior: "smooth",
         top: 0,
      });
   }, []);

   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <Logo />
            <button onClick={() => scrollTop()}><img src={arrowUp} alt="" /></button>
            <a className={styles.footer__phone} href="tel:+380975246732" target="_blanc">+(380)975246732</a>
         </div>
      </footer>
   )
};