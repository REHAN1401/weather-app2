import React from 'react'
import style from "./home.module.css"
import video from "../images/home_video.mp4"
import image from "../images/card1.jpg"
import image2 from "../images/card2.jpg"
import image3 from "../images/card3.png"
import image4 from "../images/card4.png"
import {Link} from "react-router-dom"

const Home = () => {
  return (
   <div>
  <video id={style.videoBackground} autoPlay loop muted>
    <source src={video} type="video/mp4" />
  </video>
  
  <div className={style.animatedText}>                                       { /* video text */ }
    <p>When the skies shift, so do your decisions.<br />
      AgroWeather guides you, whether to shield your fields <br />
      or let nature work its magic.
    </p>
  </div>

  <div className={style.featureBoxes}>            

    <a class={style.textStyle}href>  <div className={style.featureBox}>           {/*weather box*/}
      <bold>  <h2>WEATHER</h2></bold><br></br>
        <p >Get in sync with nature's rhythms using AgroWeather's weather section</p>
        <ul className={style.featureBullets}>
          <li>- Accurate weather forecasts for your location</li>
          <li>- Real-time updates on temperature and precipitation</li>
          <li>- Customizable alerts for changing weather conditions</li>
        </ul>
      </div>
    </a>

    <a href>
      <div className={style.featureBox}>                                           {/*crop info box*/}
        <h2>CROPS INFORMATION</h2><br></br>
        <p>Seasonal planting made easy. AgroWeather helps you choose crops that match the time</p>
        <ul className={style.featureBullets2}>
          <li>- Discover the ideal crops for every season and climate</li>
          <li>- Increase your yield by planting crops at their optimal times</li>
          <li>- Optimize your farming strategy with expert recommendations</li>
        </ul>
      </div>
    </a>

  </div>

  <div className={style.premiumSection}>                                                {/*Premium section*/}
    <h2 className={style.premiumHeading}>Elevate your agricultural experience with our premium subscription</h2>
  </div>
  
  <div className={style.cardSection}>                                                   {/* premium cards*/}

  <div className={style.cardContainer}  onClick={()=>window.location.replace('http://localhost:3001')}>
    <div className={style.card}>
      <img src={image} alt="Card 1" width="300" height="195" />
    </div>
    <p className={style.cardName}>WEATHER PREMIUM</p>
  </div>

  <div className={style.cardContainer} onClick={()=>window.location.replace('http://localhost:3001')}>
    <div className={style.card}>
      <img src={image2} alt="Card 2" width="300" height="195" />
    </div>
    <p className={style.cardName}>CROP PREMIUM</p>
  </div>

  <div className={style.cardContainer}  onClick={()=>window.location.replace('http://localhost:3001')}>
    <div className={style.card}>
      <img src={image3} alt="Card 3" width="300" height="195" />
    </div>
    <p className={style.cardName}>TECH PREMIUM</p>
  </div>

  <div className={style.cardContainer}  onClick={()=>window.location.replace('http://localhost:3001')}>
    <div className={style.card}>
      <img src={image4} alt="Card 4" width="300" height="192" />
    </div>
    <p className={style.cardName}>AGRO GOLD</p>
  </div>

</div>


</div>

  )
}

export default Home