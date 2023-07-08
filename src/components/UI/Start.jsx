import '../style/start.css';
import trainer from '../../assets/img/trainer.png';
const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img src={trainer} alt="Trainer" />
          </div>

          <div className="start__content">
            <h2 className="section__title">
              Ready to make a <span className="highlights"> change</span>?
            </h2>
            <p>
              Make it a habit: Consistency is key when it comes to fitness. Aim
              to make exercise a regular part of your routine. Schedule it into
              your calendar or set reminders to help you stay on track. Find
              ways to make it enjoyable, such as listening to music or podcasts
              while you work out.
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
