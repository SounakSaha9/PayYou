import React from "react"
import styles from "./style"
import Hero from './components/Hero'
import Billing from './components/Billing'
import Bussiness from './components/Bussiness'
// import Button from './components/Button'l
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import CTA from './components/CTA'
// import FeedbackCard from './components/FeedbackCard'
import Footer from './components/Footer'
// import GetStarted from './components/GetStarted'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Testimonials from "./components/Testimonials"

export default function App() {
  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
           <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Bussiness/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

      </div>     
    </>
  )
}
