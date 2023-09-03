import React, { useEffect, useState } from 'react';
import styles from './subscription.module.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { query, where, getDocs, collection } from "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { useAuth0 } from "@auth0/auth0-react";

firebase.initializeApp(firebaseConfig);

const Subcriptions = () => {
    const { isAuthenticated, user } = useAuth0();
    console.log("isAuthenticated",isAuthenticated);
    const [auth,setAuth] = useState(isAuthenticated)
    console.log("user",user)
    const [sub, setSub] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const dataRef = db.collection('agroweather').where('email',"==",user?.email);
        const snapshot = await dataRef.get();
        // const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("data",fetchedData)
        // const filteredData =fetchedData.filter(data => data.value.loggedInUser === "user@gmail.com")
        setSub(fetchedData);
    };

    console.log(sub);

    useEffect(() => {
        if (isAuthenticated) {
            fetchData()
        }
    }, [isAuthenticated])


    const cancelSubscription = async(id,email) =>{
        

        console.log("id",id);
        console.log("mail",user?.email);

        const db = firebase.firestore();
        const dataRef = db.collection('agroweather').where('email',"==",user?.email).where('id',"==",id);
        const snapshot = await dataRef.get();
        const fetchedData = snapshot.docs.map(doc => doc.ref.delete());
        console.log("fetched data after delete",fetchData);
       
        alert('Are you sure you want to cancel Subscription .'); 
        fetchData();
    }




    return (
        <>
        <div className={styles.container}>
        {sub.length >0 ?

        sub.map((data)=>{
            return(
            <>
            {data.id === 1 ? 
            <div className={styles.box}>
                <center><h2>Weather Premium</h2></center>
                &nbsb
                <center><h3 className={styles.paragraphSpacing}>*** Your Services are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Access to Future Weather-updates directly on website</p>
                <p className={styles.paragraphSpacing}>• Detailed weather information for crop cultivation</p>
                <center><button className={styles.BtnBlue1} onClick={()=>cancelSubscription(data.id)}>
                    Cancel Subscription
                </button></center>
            </div>:
            data.id ===2?<div className={styles.box}>
            <h2>Crop Premium</h2>
            &nbsb
            &nbsb
            &nbsb
            <center><h3 className={styles.paragraphSpacing}>*** Your Services are ***</h3></center>
            <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
            <p className={styles.paragraphSpacing}>• Crop cultivation Tips every month directly on website</p>
            <p className={styles.paragraphSpacing}>• Crop cultivation Guidance according to regions</p>

            <center><button  className={styles.BtnBlue1} onClick={()=>cancelSubscription(data.id)}>
                  Cancel  Subscription
                </button></center>
        </div>:data.id === 3?<div className={styles.box}>
                <h2>Tech Premium</h2>
                &nbsb
                <center><h3 className={styles.paragraphSpacing}>*** Your Services are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Get all Agricultural based tips before anyone else.</p>
                <p className={styles.paragraphSpacing}>• Personalise interaction with team via phone</p>
                <center><button  className={styles.BtnBlue1} onClick={()=>cancelSubscription(data.id)}>
                  Cancel  Subscription
                </button></center>
            </div>:<div className={styles.box}>
                <h2 >Agro Gold</h2>
                &nbsb
                <center><h3 className={styles.paragraphSpacing}>*** Your Services are ***</h3></center>
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Connect directly with our professional Consultants.</p>
                <p className={styles.paragraphSpacing}>• Includes all other Subscription facilities.</p>
                <center><button  className={styles.BtnBlue1} onClick={()=>cancelSubscription(data.id)}>
                  Cancel  Subscription
                </button></center>
            </div>} 
            </>)
        }):<div className={styles.excp}> <br></br> <br></br> <br></br><p>You have not Subscribed yet  :(</p>
        <br></br>
        <br></br>
        <br></br>
       
        <br></br></div>}
        </div>
        </>
    );
};

export default Subcriptions;
