import '../style/footer.css';
import logo from '../../assets/img/dumble.png';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import { Data } from 'components/Data';

const Footer = () => {
  const year = new Date().getFullYear();
  const [active, setActive] = useState(false);
  // const [active2, setActive2] = useState(false);
  const toggle = index => {
    if (active === index) {
      return setActive(false);
    }
    setActive(index);
  };
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="Logo" />
              </div>
              <h2>FitBody</h2>
            </div>
            <p>
              We're dedicated to helping you achieve your fitness goals and
              embark on a transformative journey towards a healthier, stronger
              version of yourself.
            </p>
          </div>

          {Data.map((item, index) => {
            return (
              <div className="footer__box" key={index}>
                <div className="accordion" onClick={() => toggle(index)}>
                  <h4 className="section__title">{item.title}</h4>
                  <span className={active === index ? 'open' : ''}>
                    <AiOutlineDown />
                  </span>
                </div>
                <div
                  className={
                    active === index
                      ? 'accordion__content show'
                      : 'accordion__content'
                  }
                >
                  <ul className="footer__links">
                    {item.content.map((link, index) => (
                      <li key={index}>
                        <a href="/">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* <div className="footer__box">
            <div className="accordion" onClick={() => setActive2(!active2)}>
              <h4 className="section__title">Quick Links</h4>
              <span className={active2 ? 'open' : ''}>
                <AiOutlineDown />
              </span>
            </div>
            <div
              className={
                active2 ? 'accordion__content show' : 'accordion__content'
              }
            >
              <ul className="footer__links">
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <p className="copyrighting">
          Copyright - {year} developed by Gal Alex all right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
