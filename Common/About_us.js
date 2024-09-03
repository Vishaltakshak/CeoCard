import React from "react";
import BeforLoginHeader from "../Common/BeforeLoginHeader";
import "../css/about_us.css";
import FooterNew from "./FooterNew";

// const styles = {
//   otherpagebg: {
//     background:"#000000"
//   }
// }
const AboutHeaderbgColor = "#000000";
const AboutFooterbgColor = "#ffffff";
const About_us = () => {
  return (
    <>
      <BeforLoginHeader HEADERBGCOLOR={AboutHeaderbgColor}></BeforLoginHeader>
      <div>
        {/* ist */}
        <div className="redesign-about-section-head">
          <div className="redesign-about-hero-div">
            <h1 className="redesign-about-hero-h1" style={{ color: "#000" }}>
              The CEOCard Story
            </h1>
            <p
              className="redesign-home-sub-hero"
              style={{ color: "#000", fontWeight: "600" }}
            >
              Established in 2020, CEO Card provides premium membership benefits
              for elite entrepreneurs and business leaders.
            </p>
          </div>
        </div>
        {/* 2nd  aboutvid*/}
        <div className="redesign-aboutvid-section">
          <div className="redesign-home-full-container">
            <div className="redesign-about-cols row">
              <div className="col-lg-4 col-md-4">
                <div>
                  <a
                    href="/#"
                    className="redesign-about-vid-lightbox w-inline-block w-lightbox"
                  >
                    {/* <img
                      className="redesign-about-vid-img"
                      src="assets/img/About/about-vid.jpg"
                      alt="about-vid"
                    />

                    <div className="play-button"></div> */}
                    <iframe
                      title="video"
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="redesign-home-div-left-events">
                  <p className="redesign-about-half-paragraph">
                    Established in 2020, CEO Card provides premium membership
                    benefits for elite entrepreneurs and business leaders. Our
                    mission is to elevate your business travel experiences with
                    a range of benefits covering flights, luxury hotels, and
                    essential business services. Whether you need a flight from
                    New York or a reservation at a 5-star hotel, we've got you
                    covered.
                  </p>
                  <p className="redesign-about-half-paragraph">
                    CEO Card is an innovative platform designed to enhance the
                    professional journey of today's most influential business
                    leaders. We provide tailored resources to support their
                    unique needs, recognizing the critical role executives play
                    in driving organisational success.
                  </p>
                  <p>
                    <strong>Key Offerings:</strong>
                  </p>
                  <ul className="feature-list">
                    <li>Superior business travel perks</li>
                    <li>Luxury hotel accommodations</li>
                    <li>Essential business support services</li>
                    <li>Elite networking events</li>
                    <li>Exclusive brand partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="redesign-review-stats">
          <div className="container" style={{ maxWidth: "940px" }}>
            <div className="row">
              <h1 className="text-center text">Our Community</h1>
              <br />
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6">
                <h2 className="redesign-review-h6">100,000</h2>
                <h4 className="redesign-review-h7">Elite Members</h4>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6">
                <h2 className="redesign-review-h6">100+</h2>
                <h4 className="redesign-review-h7">strategic partnerships</h4>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <h2 className="redesign-review-h6">75+</h2>
                <h4 className="redesign-review-h7">discerning investors</h4>
              </div>
              {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                <h2 className="redesign-review-h6">650,000+</h2>
                <h4 className="redesign-review-h7">Benefit Redemptions</h4>
              </div> */}
            </div>
          </div>
        </div>
        {/* 4th  review*/}
        <div className="redesign-about-review-sections">
          <div className="redesign-home-full-container">
            <div className="row row-sett">
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="redesign-about-logo-div">
                  <div
                    className="redesign-about-icon1"
                    style={{
                      backgroundImage: 'url("../assets/img/About/forbe.png")',
                    }}
                  ></div>
                  <div className="redesign-about-quote">
                    <div>
                      <em>"A Community for Leaders."</em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="redesign-about-logo-div">
                  <div
                    className="redesign-about-icon3"
                    style={{
                      backgroundImage:
                        'url("../assets/img/About/jounal-img.png")',
                    }}
                  ></div>
                  <div className="redesign-about-quote">
                    <div>
                      <em>"Soothes Stress with Elite Access."</em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="redesign-about-logo-div no-border-right">
                  <div
                    className="redesign-about-icon4"
                    style={{
                      backgroundImage:
                        'url("../assets/img/About/business-insider.png")',
                      width: "85px",
                    }}
                  ></div>
                  <div className="redesign-about-quote">
                    <div>
                      <em>"Excellent VIP Benefits"</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 5th review-section*/}
        <div className="redesign-reviews-section-main">
          <div className="container text-center" style={{ maxWidth: "940px" }}>
            <h2 className="redesign-review-h2">
              <strong>Hear From Our Members</strong>
            </h2>
            <p className="redesign-reviews-subtext">
              Over 100,000 entrepreneurs, business professionals and innovators
              use CeoCard to receive unprecedented benefits and networking
              opportunities.
            </p>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>The Peninsula New York</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card saved me 30% on a last-minute business flight to
                    India. It's a game-changer for frequent travellers. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Paolo M.</h4>
                    <p className="redesign-review-title">Principal</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Hilton Honors™</b>
                  </div>
                  <p className="redesign-review-p">
                    “I booked a 5-star hotel at a 3-star price with CEO Card.
                    The savings are real and substantial. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Anthony M.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>British Airways</b>
                  </div>
                  <p className="redesign-review-p">
                    “Thanks to CEO Card, I upgraded to a first-class ticket
                    without breaking the bank. It's like having a secret weapon
                    for luxury travel. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Christopher K.</h4>
                    <p className="redesign-review-title">Founder / COO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Dell</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card's flight deals helped me visit three continents in
                    a year without overspending. It's a must-have for
                    globetrotters. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Bijal P.</h4>
                    <p className="redesign-review-title">Founder, CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Amazon Web Services (AWS) Activate</b>
                  </div>
                  <p className="redesign-review-p">
                    “I was sceptical at first, but CEO Card's hotel discounts
                    have saved my company thousands on business trips. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <h4 className="redesign-review-name">Catherine J.</h4>
                    <p className="redesign-review-title">CEO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Wine Library</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card turned my economy budget into a business-class
                    experience. I can't imagine travelling without it now. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Lorna P.</h4>
                    <p className="redesign-review-title">Executive Director </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="redesign-review-big-div clearfix d-flex"
              style={{
                backgroundImage: 'url("../assets/img/About/hand-shake.png")',
              }}
            >
              <div className="redesign-review-big-left">
                <h3 className="redesign-review-h4-para">
                  The absolute best program I have ever been a part of. Paid for
                  itself the first 2 months.
                </h3>
                <h4 className="redesign-review-h4-name">
                  <strong>
                    Nelson G.
                    <br />
                  </strong>
                  <span className="redesign-review-title-span">
                    CEO - For The Earth Corp
                  </span>
                </h4>
              </div>
              <div className="redesign-review-big-right clearfix">
                <div className="redesign-review-big-img nelson_img"></div>
              </div>
            </div>
          </div>
        </div>
        {/* 6th  Receive Inside Access*/}
        <div className="redesign-review-cta-section">
          <div
            className="container text-center"
            style={{
              maxWidth: "940px",
            }}
          >
            <div className="redesign-review-cta-div">
              <p className="redesign-reviews-subtext">Get Access</p>
              <h2 className="redesign-review-cta-h2">
                <strong>
                  Receive Inside Access to
                  <br />
                  Over 500 Exclusive Benefits{" "}
                </strong>
              </h2>
              <a href="/Enquiry" className="btn black-button">
                PREVIEW MEMBERSHIP
              </a>
            </div>
          </div>
        </div>
        {/* 7th */}
        <div className="redesign-reviews-section-main">
          <div className="container text-center" style={{ maxWidth: "940px" }}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>SIXT - Rent The Car</b>
                  </div>
                  <p className="redesign-review-p">
                    “The exclusive airport lounge access alone is worth the CEO
                    Card membership. The flight and hotel savings are a bonus.”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Slava F.</h4>
                    <p className="redesign-review-title">Founder &amp; CEO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>1-800-Flowers.com</b>
                  </div>
                  <p className="redesign-review-p">
                    “ I used to spend hours hunting for travel deals. Now CEO
                    Card does it all for me, saving both time and money. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Roderick R.</h4>
                    <p className="redesign-review-title">Managing Partner</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>British Airways</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card's partnerships with top airlines and hotels have
                    elevated my travel experience while keeping costs down. It's
                    a win-win. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Andrew B.</h4>
                    <p className="redesign-review-title">Chairman </p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Qantas</b>
                  </div>
                  <p className="redesign-review-p">
                    “Just used this for a J flight to SYD - $839 saved. Thank
                    you FC.”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">George H.</h4>
                    <p className="redesign-review-title">Owner</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Stripe</b>
                  </div>
                  <p className="redesign-review-p">
                    “This is the best benefit I've seen. Excellent value. We've
                    spent nearly $19,000 in CC fees to stripe this year and it's
                    nice that we're getting a nice little $580 rebate!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Brennen B.</h4>
                    <p className="redesign-review-title">Principal</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Office Depot</b>
                  </div>
                  <p className="redesign-review-p">
                    “In my first order, i've already saved over $300. I plan on
                    using this for all of my companies.”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Harrison K.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Avis Rent A Car</b>
                  </div>
                  <p className="redesign-review-p">
                    “This benefit is amazing! The discount is benefit enough;
                    but, having the car waiting and avoiding lines at the
                    counter made it even better! ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Jason F.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Stripe</b>
                  </div>
                  <p className="redesign-review-p">
                    “This was worth almost 600 bucks to me!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Andrei G.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>illy Caffè</b>
                  </div>
                  <p className="redesign-review-p">
                    “Used this to finally pull the trigger on an espresso
                    subscription for the office. The extra 20% off from FC added
                    up to save me significantly on my coffee habit spend. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Peter B.</h4>
                    <p className="redesign-review-title">co-founder</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Dell</b>
                  </div>
                  <p className="redesign-review-p">“Just saved over $1000!”</p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Tanisha R.</h4>
                    <p className="redesign-review-title">
                      Co-Founder &amp; CEO
                    </p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>1-800-Flowers.com</b>
                  </div>
                  <p className="redesign-review-p">
                    “I saved a lot on holiday gifts for my staff.”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Mimi B.</h4>
                    <p className="redesign-review-title">Co-founder</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>UPS</b>
                  </div>
                  <p className="redesign-review-p">
                    “YESSS. I already had 18% for small business, but the 36% is
                    just that much better!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/tiny_headshot.jpg")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Nicholas H.</h4>
                    <p className="redesign-review-title">President &amp; CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8th  Receive Inside Access*/}
        <div className="redesign-review-cta-section">
          <div
            className="container text-center"
            style={{
              maxWidth: "940px",
            }}
          >
            <div className="redesign-review-cta-div">
              <p className="redesign-reviews-subtext">Get Access</p>
              <h2 className="redesign-review-cta-h2">
                <strong>
                  Receive Inside Access to
                  <br />
                  Over 500 Exclusive Benefits{" "}
                </strong>
              </h2>
              <a href="/Enquiry" className="btn black-button">
                PREVIEW MEMBERSHIP
              </a>
            </div>
          </div>
        </div>
        {/* 9th cart below recive inside page */}
        <div className="redesign-reviews-section-main">
          <div className="container text-center" style={{ maxWidth: "940px" }}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>The Peninsula New York</b>
                  </div>
                  <p className="redesign-review-p">
                    “Just had a fantastic trip across the pond on Virgin
                    Atlantic. Upper Class at a smart price. Thank you, Ceo
                    Card!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Paolo M.</h4>
                    <p className="redesign-review-title">Principal</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div>FC Exclusive Benefit</div>
                  <div className="no-translation">
                    <b>Hilton Honors™</b>
                  </div>
                  <p className="redesign-review-p">
                    “With my athleisure habit, this will pay for my membership
                    alone. So great to get Adidas' newest gear at a discount!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Anthony M.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div>FC Exclusive Benefit</div>
                  <div className="no-translation">
                    <b>British Airways</b>
                  </div>
                  <p className="redesign-review-p">
                    “Booked 6 round trip tickets for this summer and saved over
                    $500!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Christopher K.</h4>
                    <p className="redesign-review-title">Founder / COO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div>FC Exclusive Benefit</div>
                  <div className="no-translation">
                    <b>Dell</b>
                  </div>
                  <p className="redesign-review-p">
                    “This is great! I saved almost $600 per new desktop for the
                    offices at Hotel BPM Brooklyn.”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Bijal P.</h4>
                    <p className="redesign-review-title">Founder, CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div>FC Exclusive Benefit</div>
                  <div className="no-translation">
                    <b>Amazon Web Services (AWS) Activate</b>
                  </div>
                  <p className="redesign-review-p">
                    “Good as gold, the $5000 service credit came through. That's
                    $5k (plus the $1.5K support credits) I no longer have to pay
                    - thank you FC!”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <h4 className="redesign-review-name">Catherine J.</h4>
                    <p className="redesign-review-title">CEO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div>FC Exclusive Benefit</div>
                  <div className="no-translation">
                    <b>Wine Library</b>
                  </div>
                  <p className="redesign-review-p">
                    “What an awesome selection and great offers. Terrific FC
                    benefit.”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Lorna P.</h4>
                    <p className="redesign-review-title">Executive Director </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterNew FOOTERBGCOLOR={AboutFooterbgColor} />
      </div>
    </>
  );
};

export default About_us;
