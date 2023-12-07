import React from 'react'
import Layout from '../components/Layout/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className="dummy-child" />
      <div className="dummy-item" />
      {/* <textarea
        className="embark-on-your-container"
        placeholder="Embark on Your Academic Journey with Confidence"
      > */}
      { /* <span className="embark-on-your">{`Embark on Your `}</span>
        <span className="academic">Academic</span>
        <span className="embark-on-your"> Journey with Confidence</span>
      </textarea> */}
      <div className="your-journey-starts">Your Journey Starts Here</div>
      <textarea
        className="our-seasoned-admission"
        placeholder="Our seasoned admission consultants are dedicated to navigating the intricate pathways of college admissions. With personalized strategies and in-depth knowledge, we empower you to confidently pursue your dream education in renowned institutions."
      />
      <img className="dummy-inner" alt="" src="/group-5.svg" />
      <img
        className="beautiful-business-woman-with-icon"
        alt=""
        src="../images/hero.png"
      />
      <div className="rectangle-div" />
      <div className="rectangle-group">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="email-address-parent">
          <div className="email-address">EMAIL ADDRESS</div>
          <div className="book-an-appointment">Book an appointment</div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage