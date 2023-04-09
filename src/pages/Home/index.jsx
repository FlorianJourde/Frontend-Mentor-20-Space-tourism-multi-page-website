import {Link} from "react-router-dom";
import "../../styles/Home.scss";
import setBackground from "../../utils/setBackground";

function Home() {
  setBackground( 'home');

  return  (
    <section className={'home-section'}>
      <div className={'wrapper'}>
        <h2>So you want to travel to</h2>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
        <Link to="/crew">
          Explore
        </Link>
      </div>
    </section>
  )
}

export default Home;