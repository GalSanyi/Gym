import '../style/header.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/img/dumble.png';
import { BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const nav__link = [
  {
    path: '#',
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

  const headerRef = useRef(null);

  const headerFun = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky-header');
    } else {
      headerRef.current.classList.remove('sticky-header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFun);
    return () => {
      window.removeEventListener('scroll', headerFun);
    };
  }, []);
  const handleClick = e => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    if (targetAttr === '#') {
      // Handle the case where the targetAttr is '#' (or any other specific value)
      // For example, you can scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optionally add smooth scrolling behavior
      });
    } else {
      const targetElement = document.querySelector(targetAttr);
      if (targetElement) {
        const location = targetElement.offsetTop;
        window.scrollTo({
          left: 0,
          top: location - 50,
          behavior: 'smooth', // Optionally add smooth scrolling behavior
        });
      }
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* logo */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="Logo" />
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
              <span className="close__menu" onClick={() => setShow(!show)}>
                <AiOutlineClose />
              </span>
              {nav__link.map(item => (
                <li key={uuidv4()} className="nav__item">
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="nav-right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu" onClick={() => setShow(!show)}>
              <BsList />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
