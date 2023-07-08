import '../style/testimonials.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const Testimonials = () => {
  return <section><div className='container'>
    <Swiper
         effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    
   
    </Swiper>
  </div></section>;
};

export default Testimonials;
