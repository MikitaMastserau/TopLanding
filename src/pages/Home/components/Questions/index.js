import analysis from "static/icons/analysis.svg";
import copy from "static/icons/copy.svg";
import design from "static/icons/design.svg";

import styles from "./styles.module.scss";

export const Questions = () => {
   return (
      <section className={styles.quest}>
         <div className={styles.container}>
            <div className={styles.quest__blocks}>
               <div className={styles.quest__hat}>
                  <h2>What is Landing-Page?</h2>
                  <p>Landing-Page-This is a landing page, maximally tailored for the sale of specific goods or services, the task of the landing page is to turn site visitors into your customers.</p>
               </div>
               <div className={styles.quest__hat}>
                  <h2>Whore are we?</h2>
                  <p>TopLanding.pro - a team of creative designers, programmers and managers. During 4 years of our work, we have launched more than 80 landing pages and advertising campaigns, which bring our clients a huge number of applications.</p>
               </div>
               <div className={styles.quest__hat}>
                  <h2>How do we get powerful results?</h2>
                  <p>Selling premium-design - is just the tip of the iceberg. Powerful results can only be obtained from an integrated approach to solving the problem.</p>
               </div>
               <div className={styles.quest__hat}>
                  <div>
                     <h2>33,2%</h2>
                     <p>Average conversion rate of our landing pages.</p>
                  </div>
               </div>
            </div>
            <div className={styles.quest__spheres}>
               <div className={styles.quest__ball}>
                  <img src={analysis} alt="" />
                  <h3>Market analysis</h3>
                  <p>Full immersion in your business. We extract meanings and values, highlight the strengths of the business.</p>
               </div>
               <div className={styles.quest__ball}>
                  <img src={copy} alt="" />
                  <h3>Copywriting</h3>
                  <p>When you only have one line, every word is worth its weight in gold. Each screen is a semantic bullet.</p>
               </div>
               <div className={styles.quest__ball}>
                  <img src={design} alt="" />
                  <h3>Design</h3>
                  <p>A professional designer makes a gorgeous visual package for your proposal.</p>
               </div>
            </div>
         </div>
      </section>
   )
};