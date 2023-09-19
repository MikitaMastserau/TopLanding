import { Logo } from "components/Logo";
import { Button } from "components/Button";

import styles from "./styles.module.scss";

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <Logo />
            <div className={styles.header__phone}>
               <a href="tel:+380975246732" target="_blanc">+(380)975246732</a>
               <Button text="Request a call" />
            </div>
         </div>
      </header>
   )
};