import Button from '../../components/Button/Button.js'

function Programs() {
  return (
    <section id="programs" className="section">
      <div className="programs">
        <h2 className="title">Transformational Programs</h2>
        <div className="cards">
          <div className="cards-container">
            <div className="ellipse">
              <img
                src="/images/home/program/teens_public_program.png"
                alt="teens_public_program"
              />
            </div>
            <div>
              <h1>Teens Public Programs</h1>
              <h3>G6-G12</h3>
              <h3>
                <Button label="Find Out More" type="redirect" url="/program#teens_public_programs"/>
              </h3>
            </div>
            <h2>
              "Education cannot be effective unless it helps a child open up
              himself to life."
            </h2>
          </div>
          <div className="cards-container">
            <div className="ellipse">
              <img
                src="/images/home/program/school_program.png"
                alt="school_program"
              />
            </div>
            <div>
              <h1>School Programs</h1>
              <h3>G6-G12</h3>
              <h3>
                <Button label="Find Out More" type="redirect" url="/program#school_programs"/>
              </h3>
            </div>

            <h2>
              "Education cannot be effective unless it helps a child open up
              himself to life."
            </h2>
          </div>
          <div className="cards-container">
            <div className="ellipse">
              <img
                src="/images/home/program/teacher_training.png"
                alt="teacher_training"
              />
            </div>
            <h1>Teacher Trainings</h1>
            <div>
              <h3>
                <Button label="Find Out More" type="redirect" url="/program#teacher_trainings"/>
              </h3>
            </div>
            <h2>"A teacher takes a hand, opens a mind and touches a heart."</h2>
          </div>
        </div>
        <div className="cards">
          <div className="cards-container">
            <div className="ellipse">
              <img
                src="/images/home/program/co-operate_training.png"
                alt="co-operate_training"
              />
            </div>
            <h1>Co-operate Trainings</h1>
            <div>
              <h3>
                <Button label="Find Out More" type="redirect" url="/program#co-operate_trainings"/>
              </h3>
            </div>
            <h2>"The greatest assets of a company is its people."</h2>
          </div>
          <div className="cards-container">
            <div className="ellipse">
              <img
                src="/images/home/program/1-on-1_coaching.png"
                alt="1-on-1_coaching"
              />
            </div>
            <h1>1 on 1 Coaching</h1>
            <div>
              <h3>
                <Button label="Find Out More" type="redirect" url="/program#1-on-1_coaching"/>
              </h3>
            </div>
            <h2>
              "Life coaching is the universal language for life and learning."
            </h2>
          </div>
          <div className="cards-container">
            <div className="ellipse">
              <img
                src="/images/home/program/consulting_and_assessment.png"
                alt="consulting_and_assessment"
              />
            </div>
            <h1>Consulting & Assessment</h1>
            <div>
              <h3>
                <Button label="Find Out More" type="redirect" url="/program"/>
              </h3>
            </div>
            <h2>"Self assessment is the first step to any assessments."</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
