import logo from "../../img/logo/logo2.png";
import style from "./Footer.module.scss";

let Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContent}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <h2>Sneakers Shop</h2>
        </div>
        <div className={style.footerInformation}>
          <div className={style.skills}>
            <h4>My stack:</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3, SCSS</li>
              <li>JavaScript</li>
              <li>React, Redux</li>
              <li>Ajax</li>
              <li>RestAPI</li>
            </ul>
          </div>
        </div>
      </div>
      <small>&copy; Copyright 2023, soheil-razouq</small>
    </footer>
  );
};

export default Footer;



