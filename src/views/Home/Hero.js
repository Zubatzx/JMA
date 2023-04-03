import Button from '../../components/Button/Button.js'

function Hero() {
    return (
        <section id="hero" className="s-hero">
          <div className="s-hero__bg rellax" data-rellax-speed={-7}/>
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>Inspiring Growth and Character</h1>
                <h3>
                  It takes more than a dream to reach a lifetime of success.
                  Increase grades and boost your social skills during the holidays
                  to prepare for the future!
                </h3>
                <Button label="Tell Me More" type="redirect" url="/contact-us"/>
              </div>
            </div>
          </div>
      </section>
    )
}

export default Hero;