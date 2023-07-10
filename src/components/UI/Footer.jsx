import '../style/footer.css';
import logo from '../../assets/img/dumble.png';
import { AiOutlineDown } from 'react-icons/ai';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
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
          <div className="footer__box">
            <h4 className="section__title">Company</h4>
            <ul className="footer__links">
              <li>
                <a href="/">Our program</a>
              </li>
              <li>
                <a href="/">Our plan</a>
              </li>
              <li>
                <a href="/">Become member</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <div className="accordion">
              <h4 className="section__title">Quick Links</h4>
              <span>
                <AiOutlineDown />
              </span>
            </div>
            <div className="accordion__content">
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
          </div>
        </div>
        <p className="copyrighting">
          Copyright - {year} developed by Gal Alex all right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
