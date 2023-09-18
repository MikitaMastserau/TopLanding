import { Button } from "components/Button";

import arrowDown from "static/icons/arrowDown.svg";

import styles from "./styles.module.scss";

export const Main = () => {
   return (
      <main className={styles.main}>
         <div className={styles.container}>
            <h1 className={styles.main__title}>Creation of efficient Landing-Page</h1>
            <p className={styles.main__text}>Bonus until the end of April: Free month of advertising campaigns!
               Send a request to find out the cost and development time.</p>
            <Button text="Calculate the cost of services" />
            <button className={styles.main__btn}><img src={arrowDown} alt="" /></button>
         </div>
      </main>
   )
};