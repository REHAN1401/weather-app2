import React from 'react';
import styles from './subscription.module.css';

const Subcriptions4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <center><h2>Weather Premium</h2></center>
                &nbsb   
                <center><h3 className={styles.paragraphSpacing}>*** Your Service are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Access to Future Weather-updates directly on website</p>
                <p className={styles.paragraphSpacing}>• Detailed weather information for crop cultivation</p>
                <center><button  className={styles.BtnBlue}>
                   Subscribe
                </button></center>                
            </div>

            <div className={styles.box}>
                <h2>Crop Premium</h2>
                &nbsb
                &nbsb
                &nbsb
                <center><h3 className={styles.paragraphSpacing}>*** Your Service are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Crop cultivation Tips every month directly on website</p>
                <p className={styles.paragraphSpacing}>• Crop cultivation Guidance according to regions</p>
        
                <center><button  className={styles.BtnBlue}>
                    Subscribe
                </button></center>
            </div>

            <div className={styles.box}>
                <h2>Tech Premium</h2>
                &nbsb
                <center><h3 className={styles.paragraphSpacing}>*** Your Service are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Get all Agricultural based tips before anyone else.</p>
                <p className={styles.paragraphSpacing}>• Personalise interaction with team via phone</p>
                <center><button  className={styles.BtnBlue}>
                    Subscribe
                </button></center>
            </div>

            <div className={styles.box}>
                <h2 >Agro Gold</h2>
                &nbsb
                <center><h3 className={styles.paragraphSpacing}>*** Your Service are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Connect directly with our professional Consultants.</p>
                <p className={styles.paragraphSpacing}>• Includes all other Subscription facilities.</p>
                <center><button  className={styles.BtnBlue1}>
                  Cancel  Subscription
                </button></center>

            </div>
        </div>
    );
};

export default Subcriptions4;
