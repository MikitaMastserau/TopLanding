import { Button } from "components/Button";

import styles from "./styles.module.scss";

export const Order = () => {
   return (
      <section className={styles.order}>
         <div className={styles.container}>
            <div className={styles.order__hat}>
               <h3>When ordering any service, a 15% discount</h3>
               <p>The promotion is valid from July 01 to August 31, 2017</p>
            </div>
            <form>
               <div className={styles.order__formHat}>
                  <h3>Download the complete price list for our services.</h3>
                  <p>To do this, just fill out the form, and our manager will send you a price list by mail</p>
               </div>
               <div className={styles.order__fields}>
                  <div className={styles.order__inputWrapper}>
                     <input type="text" placeholder="Name" name="name" autoComplete="off" required />
                  </div>
                  <div className={styles.order__inputWrapper}>
                     <input type="text" placeholder="Telephone" name="phone" autoComplete="off" required />
                  </div>
                  <div className={styles.order__inputWrapper}>
                     <input type="email" placeholder="E-mail" name="email" autoComplete="off" required />
                  </div>
               </div>
               <Button text="Find out the cost." />
            </form>
         </div>
      </section>
   )
};