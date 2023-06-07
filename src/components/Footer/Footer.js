import Button from '../../components/Button/Button.js'

function Footer() {
    return (
        <footer className="s-footer">
          <div className="s-footer-top">
            <h3>Contact us to JOIN our FREE INTRODUCTORY WORKSHOP</h3>
            <h4>Contact us to learn more</h4>
            <Button label="Contact Us" type="redirect" url="/contact-us"/>
            <Button label="Register Now" type="redirect" url="/contact-us"/>
          </div>
          <div className="s-footer-bottom">
            <div className="row">
              <div className="column large-3 medium-3 w-1000-stack">
              </div>
              <div className="column large-6 medium-6 w-1000-stack ss-copyright">
                <span>© 2023 JALAN MAJU AKADEMI. All rights reserved.</span>
              </div>
              <div className="column large-3 medium-3 w-1000-stack s-footer__social-block">
                <ul className="s-footer__social">
                  <li><a href="https://www.facebook.com/profile.php?id=100065013322597"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/jmakademi/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCy5xg-4ByDm1TJNkM9HrnYA"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;