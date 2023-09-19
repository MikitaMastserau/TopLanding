import { Button } from "components/Button";
import styles from "./styles.module.scss";

export const Tariffs = () => {
   return (
      <section className={styles.tariffs} id="tariffs">
         <div className={styles.container}>
            <div className={styles.tariffs__hat}>
               <h2>Tariffs and included services.</h2>
               <p>Our clients understand perfectly well that in order to earn serious money, you need to invest accordingly in marketing.</p>
            </div>
            <div className={styles.tariffs__content}>
               <div className={styles.tariffs__rate}>
                  <h3>Standart</h3>
                  <div className={styles.tariffs__offers}>
                     <p>Template design</p>
                     <p>Adaptive layout</p>
                     <p>Professional copywriting</p>
                     <p>Setting up analytics and goals</p>
                     <p>Concept development and USP</p>
                     <p>Configuring UTM tags for tickets</p>
                     <p className={styles.close}>Development of a prototype</p>
                     <p className={styles.close}>Setting up Google Adwords</p>
                     <p className={styles.close}>Configuring Yandex.Direct</p>
                     <p className={styles.close}>Express business analysis</p>
                     <p className={styles.close}>Setting up SMS informing</p>
                     <p className={styles.close}>Installing CMS (admin panel)</p>
                     <p className={styles.close}>Hosting, domain - as a gift</p>
                     <p className={styles.close}>Logo design - as a gift</p>
                  </div>
                  <Button text="Find out the cost." />
               </div>
               <div className={styles.tariffs__rate}>
                  <h3>Premium</h3>
                  <div className={styles.tariffs__offers}>
                     <p>Template design</p>
                     <p>Adaptive layout</p>
                     <p>Professional copywriting</p>
                     <p>Setting up analytics and goals</p>
                     <p>Concept development and USP</p>
                     <p>Configuring UTM tags for tickets</p>
                     <p>Development of a prototype</p>
                     <p>Setting up Google Adwords</p>
                     <p>Configuring Yandex.Direct</p>
                     <p className={styles.close}>Express business analysis</p>
                     <p className={styles.close}>Setting up SMS informing</p>
                     <p className={styles.close}>Installing CMS (admin panel)</p>
                     <p className={styles.close}>Hosting, domain - as a gift</p>
                     <p>Logo design - <span>as a gift</span></p>
                  </div>
                  <Button text="Find out the cost." />
               </div>
               <div className={styles.tariffs__rate}>
                  <h3>Platinum</h3>
                  <div className={styles.tariffs__offers}>
                     <p>Template design</p>
                     <p>Adaptive layout</p>
                     <p>Professional copywriting</p>
                     <p>Setting up analytics and goals</p>
                     <p>Concept development and USP</p>
                     <p>Configuring UTM tags for tickets</p>
                     <p>Development of a prototype</p>
                     <p>Setting up Google Adwords</p>
                     <p>Configuring Yandex.Direct</p>
                     <p>Express business analysis</p>
                     <p>Setting up SMS informing</p>
                     <p>Installing CMS (admin panel)</p>
                     <p>Hosting, domain - <span>as a gift</span></p>
                     <p>Logo design - <span>as a gift</span></p>
                  </div>
                  <Button text="Find out the cost." />
               </div>
            </div>
         </div>
      </section>
   )
};