import { BsFillPlayFill } from 'react-icons/bs';
import { FaHeartbeat } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import heroImg from '../../assets/img/gym-02.png';
import dumbleIcon from '../../assets/img/dumble.png';
import '../style/hero.css';
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          {/* hero content */}
          <div className="hero__content">
            <h2 className="section__title">
              Exercise is the key to <span className="highlights">Heathy</span>
              Lifestyle
            </h2>
            <p>
              Physical Fitness: Exercise helps improve cardiovascular health,
              build strength, enhance flexibility, and increase endurance. It
              promotes proper functioning of the heart, lungs, muscles, and
              other body systems.
            </p>
            <div className="hero__btn">
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <BsFillPlayFill />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* hero img */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box-img">
                      <img src={heroImg} alt="Hero" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gym__location">
                <span>
                  <MdLocationPin />
                </span>
                <h5>
                  Find a new <br />
                  gym near you
                </h5>
              </div>
              <div className="heart__rate">
                <h5>Heart Rate</h5>
                <span>
                  <FaHeartbeat />
                </span>
                <h6>2567 BPM</h6>
              </div>
            </div>

            <div className="dumble__icon">
              <img src={dumbleIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
