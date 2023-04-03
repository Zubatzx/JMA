function Hero() {
    return (
        <section id="hero" className="s-hero">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} style={{'backgroundImage': `url('images/program/banner.png')`}}/>
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1 style={{textAlign:'left'}}>OUR PROGRAM</h1>
                <h3 style={{textAlign:'left',marginRight:'0em',marginLeft:'0em'}}>
                  We at Jalan Maju Academy have incorporated
                  experience and theory to develop a variety
                  of courses and programs to fit everyone’s
                  needs. Whether you want to improve existing
                  skills or expand your horizons, you’ve come
                  to the right place. Look through our course
                  schedule below to see what we have to offer,
                  and contact us today for an introductory session.
                </h3>
              </div>
            </div>
          </div>
      </section>
    )
}

export default Hero;