"use client";

import { useState, useEffect } from "react";

import "../sass/layout/_header.scss";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <Image src="/icons/logo.png" alt="logo" width={85} height={35} />
      </Link>
      <nav className="header__nav">
        <div className="header__nav__item">Haqqımızda</div>
        <div className="header__nav__item">Kitablar</div>
        <div className="header__nav__item">İmtahanlar</div>
        <div className="header__nav__item">Bizimlə əlaqə</div>
        <select
          name="lang"
          id="lang"
          autoComplete="off"
          className="header__nav__option"
        >
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
        </select>
      </nav>
      <div className="header__btns">
        <button className="header__btns__signin">Daxil Ol</button>
        <button className="header__btns__signup">Qeydiyyat</button>
      </div>
      <div
        className={`header__menu ${
          isMenuActive && windowSize < 992 && "active"
        }`}
      >
        <div className="header__menu__item">Haqqımızda</div>
        <div className="header__menu__item">Kitablar</div>
        <div className="header__menu__item">İmtahanlar</div>
        <div className="header__menu__item">Bizimlə əlaqə</div>
        <div className="header__menu__item">Daxil Ol</div>
        <div className="header__menu__item">Qeydiyyat</div>
      </div>
      <button
        className={`header__menu__btn ${
          isMenuActive && windowSize < 992 && "active"
        }`}
        onClick={handleMenu}
      >
        <div className="header__menu__btn__item" />
        <div className="header__menu__btn__item" />
        <div className="header__menu__btn__item" />
      </button>
    </header>
  );
};

export default Header;
