import introImages from "../../links/Home/introImages";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Intro() {
  return (
    <section id="intro" className="section">
      <div className="intro">
        <div className="intro-header">
          <h3>INTERACTIVE VIRTUAL LEARNING FOR THE YOUTH OF INDONESIA</h3>
        </div>
        <div className="row">
          <div className="column large-6 tab-12 content">
            <div className="slide-container">
              <Slide>
                {introImages &&
                  introImages.map((img) => (
                    <div className="each-slide">
                      <div style={{ backgroundImage: `url(${img})` }} />
                    </div>
                  ))}
              </Slide>
            </div>
          </div>
          <div className="column large-6 tab-12 content">
            <p>
              Here in <b>Jalan Maju Academy</b>, helping the youth stay
              up-to-date with modern skills and knowledge is not just a
              commitment, it is a passion.
            </p>
            <p>
              With our wide variety of courses and dedicated team of
              instructors, we make learning easy, affordable and fun.
            </p>
            <p>
              Check out our site to learn about what we have to offer, and give
              us a call to schedule an introductory session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
