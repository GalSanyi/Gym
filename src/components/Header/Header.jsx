import '../style/header.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/img/dumble.png';
import { BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const nav__link = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#schedule',
    display: 'Schedule',
  },
  {
    path: '#classes',
    display: 'Classes',
  },
  {
    path: '#pricing-plan',
    display: 'Pricing',
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains('mobile__menu')
      ) {
        setShow(false);
      }
    };

    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        setShow(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          {/* logo */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/* navigation menu */}

          <div
            className={
              show ? ['navigation', 'mobile__menu'].join(' ') : ['navigation']
            }
          >
            <ul className="menu">
              <span className="close__menu" onClick={handleToggleMenu}>
                <AiOutlineClose />
              </span>
              {nav__link.map(item => (
                <li key={uuidv4()} className="nav__item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="nav-right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu" onClick={handleToggleMenu}>
              <BsList />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
