import '../style/exercise.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';
const Exercise = () => {
  return (
    <section>
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Weight management: Regular physical activity helps burn calories,
            <br />
            maintain a healthy weight, and prevent obesity. <br />
            It can also increase muscle mass,
            <br /> which boosts metabolism and aids in weight management.
          </p>
        </div>
        {/* Exercise List */}
        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={lunges} alt="Luges" />
            </span>
            <div className="exercise__content">
              <h4>Healthy life </h4>
              <p>
                Adequate sleep: Aim for 7-9 hours of quality sleep each night.
                Develop a consistent sleep schedule and create a relaxing
                bedtime routine to enhance your sleep quality.
              </p>
            </div>
          </div>

          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={yoga} alt="Yoga" />
            </span>
            <div className="exercise__content">
              <h4>increased Flexibility</h4>
              <p>
                Improved joint health: Regular stretching and flexibility
                exercises can help maintain and improve the health of your
                joints.
              </p>
            </div>
          </div>

          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={extended} alt="Extended" />
            </span>
            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>
                Regular exercise: Engage in regular physical activity for at
                least 150 minutes per week or as recommended by your healthcare
                provider
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
