import Button from "../../components/Button/Button.js";
import EventsInfo from "../../links/Home/eventsInformation";
import eventImages from "../../links/Home/eventImages";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Teams() {
  return (
    <section id="teams" className="section">
      <div className="teams">
        <div className="row team-row team">
          <div className="column large-8 tab-12 content team">
            <img
              className="team-img"
              src="/images/home/teams/jma_trainers.png"
              alt="jma_trainers"
            />
          </div>
          <div className="box-container column large-4 tab-12 content">
            <div className="box-description">
              <h2>Committed to Deliver the Best Experience</h2>
              <br />
              <h4>
                Change always comes from within. Our team is made up of
                individuals who are highly dedicated to foster change by
                providing you with a one-of-a-kind training experience.
              </h4>
              <br />
              <Button label="Learn More" type="redirect" url="/igniters" />
            </div>
          </div>
        </div>
        <div className="row team-row">
          <div className="column large-6 tab-12 content">
            <div className="slide-container">
              <Slide>
                {eventImages &&
                  eventImages.map((img) => (
                    <div className="each-slide">
                      <div style={{ backgroundImage: `url(${img})` }} />
                    </div>
                  ))}
              </Slide>
            </div>
          </div>
          <div className="column large-6 tab-12 content events">
            <h1>Upcoming Events</h1>
            <div className="events-container">
              {EventsInfo &&
                EventsInfo.map((item) => (
                  <div className="event-content">
                    <div className="event-date">
                      <h3>{item.eventDate}</h3>
                      <p>
                        {item.eventMonth}
                        <br/>
                        {item.eventYear}
                      </p>
                    </div>
                    <div className="event-description">
                      <h4>{item.eventName}</h4>
                      <p> {item.eventDescription}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teams;
