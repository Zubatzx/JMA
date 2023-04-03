import IgnitersInfo from "../../links/Igniters/ignitersInformation";

function IgnitersCarousel() {
  return (
    <section className="igniters-body">
      <div className="background-stripe"></div>
      <div className="igniters-container">
        {IgnitersInfo &&
          IgnitersInfo.map((item) => (
            <div className="igniters-content">
              <div className="igniters-image">
                <img src={item.image} alt={item.alt}></img>
              </div>
              <div>
                <h4>
                  {item.name} <span>|</span> {item.position}
                </h4>
                <h6>{item.jobdesc}</h6>
                <p>{item.description}</p>

                <div className="social-links">
                  {item.socialMedia &&
                    item.socialMedia.map((socialMedia) => (
                      <a
                        href={socialMedia.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className={"fab fa-"+socialMedia.name}
                          aria-hidden="true"
                          color="black"
                        ></i>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default IgnitersCarousel;
