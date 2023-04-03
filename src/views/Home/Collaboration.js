import collaborationInformation from "../../links/Home/collaborationInformation";
import Button from '../../components/Button/Button.js'

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Collaboration() {
    return (
        <section id="collaboration" className="section">
          <div className="collaboration">
            <div className="collaboration-header">
              <h3>COLLABORATION</h3>
            </div>
            <div className="slide-container">
              <Slide>
                {collaborationInformation &&
                  collaborationInformation.map((item) => (
                    <div className="each-slide">
                      <div style={{ backgroundImage: `url(${item.image})` }} />
                      <Button label="More Info" type="open" url={item.redirect_url}/>
                    </div>
                  ))}
              </Slide>
            </div>
          </div>
        </section>
    )
}

export default Collaboration;