import '../style/testimonials.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const Testimonials = () => {
  return (
    <section>
      <div className="container sliders">
        <h2 className="section__title">Testimonials</h2>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__img-01">
                <img src={avatar01} alt="Avatar" />
                <h4>Jesics Fernandes</h4>
                <p>
                  Motivation and Support: Fitness trainers provide
                  encouragement, support, and accountability to keep their
                  clients motivated and committed to their fitness journey.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__img-02">
                <img src={avatar02} alt="Avatar" />
                <h4>Jesics Fernandes</h4>
                <p>
                  Remember, maintaining a healthy lifestyle is a continuous
                  process that requires commitment and consistency. Small,
                  sustainable changes can have a significant impact on overall
                  health and lead to a happier and more fulfilling life.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
