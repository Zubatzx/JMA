import Button from '../../components/Button/Button.js'

function Programs() {
    return (
        <section id="programs" className="section">
            <div className="program">
                <div id="teens_public_programs" className="row">
                    <div className="column large-6 tab-12 image">
                        <div className="block"></div>
                            <img
                                src="/images/program/teens_public_program.png"
                                alt="teens public programs"
                            />
                    </div>
                    <div className="column large-6 tab-12 desc">
                        <h3>Teens Public Programs</h3>
                        <h4>
                            An excellent starter to learn new life,
                            academic, and interpersonal skills.
                            In order to burn bright, the flames of
                            curiosity have to be sparked inside the
                            mind of our teens. As one of the most popular
                            courses we offer, there are classes available
                            at many different times to fit all types of
                            schedules.
                        </h4>
                    </div>
                </div>
                <div id="school_programs" className="highlight">
                    <div className="row">
                        <div className="column large-6 tab-12 desc">
                            <h3>School Programs</h3>
                            <h4>
                                Our goal is to empower the youth through
                                the expansion of knowledge. More often
                                than not, they are taught to tackle problems
                                linearly, and this hinders their growth.
                                When left unaware of their own capacities,
                                anyone will never know in what way and how
                                much better they can improve.
                            </h4>
                            <h4>We intend to change that.</h4>
                            <Button label="Learn More" type="redirect" url="/contact-us"/>
                        </div>
                        <div className="column large-6 tab-12 image">
                            <img
                                src="/images/program/school_programs.png"
                                alt="school programs"
                            />
                        </div>
                    </div>
                </div>
                <div id="teacher_trainings" className="row">
                    <div className="column large-6 tab-12 image">
                        <div className="block"></div>
                        <img
                            src="/images/program/teacher_trainings.png"
                            alt="teacher trainings"
                        />
                    </div>
                    <div className="column large-6 tab-12 desc">
                        <h3>Teacher Trainings</h3>
                        <h4>
                            How to deliver courses to the youth while
                            keeping their interest and motivation levels
                            high? How to manage the atmosphere of the
                            classroom? What signs of stress should we as
                            educators watch out for in our students? This
                            training will change the way you see the process
                            of teaching.
                        </h4>
                    </div>
                </div>
                <div id="co-operate_trainings" className="highlight">
                    <div className="row">
                        <div className="column large-6 tab-12 desc">
                            <h3>Co-operate Trainings</h3>
                            <h4>
                                Optimal growth in a short amount of time is
                                the name of the game. Time wasted is money wasted.
                                Teams who intend to get a boost in motivation and
                                collaboration should find this course helpful. 
                            </h4>
                            <h4>*Due to high demand, we recently added new customized classes.</h4>
                            <Button label="Learn More" type="redirect" url="/contact-us"/>
                        </div>
                        <div className="column large-6 tab-12 image">
                            <img
                                src="/images/program/co_operate_trainings.png"
                                alt="co-operate trainings"
                            />
                        </div>
                    </div>
                </div>
                <div id="1-on-1_coaching" className="row">
                    <div className="column large-6 tab-12 image">
                        <div className="block"></div>
                        <img
                            src="/images/program/1_on_1_coaching.png"
                            alt="1-on-1 coaching"
                        />
                    </div>
                    <div className="column large-6 tab-12 desc">
                        <h3>1-on-1 Coaching</h3>
                        <h4>
                            Highly customizable sessions designed for those
                            who would like to achieve personal goals. Learning
                            materials and schedule will be discussed beforehand
                            with the trainer to establish a comfortable, and
                            effective learning space.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programs;