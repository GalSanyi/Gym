import '../style/pricing.css';
import { AiTwotoneCheckCircle } from 'react-icons/ai';

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Please note that the actual pricing and availability may vary.
            <br />
            Contact our gym directly for the most accurate and up-to-date
            information.
          </p>
        </div>
        {/* pricing wrapper */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className=" pricing section__title">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  5 classes per week
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className=" pricing section__title">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  5 classes per week
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className=" pricing section__title">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <AiTwotoneCheckCircle />
                  </span>
                  5 classes per week
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
