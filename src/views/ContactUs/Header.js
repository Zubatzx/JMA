function Header() {
  return (
    <section id="hero" className="s-hero" style={{ height: "100vh" }}>
      <div className="s-hero__bg rellax" data-rellax-speed={-7} style={{'backgroundImage': `url('images/contact-us/banner.jpg')`}}/>
      <div className="row s-hero__content">
        <div className="column">
          <h1>CONTACT US</h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
