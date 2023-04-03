import './Home.scss'

import Hero from './Hero.js'
import Intro from './Intro.js'
import Collaboration from './Collaboration'
import Programs from './Programs.js'
import Teams from './Teams.js'

function Home() {
    return (
        <div className='home'>
            <Hero />
            <Intro />
            <Collaboration />
            <Programs />
            <Teams />
        </div>
    )
}

export default Home;