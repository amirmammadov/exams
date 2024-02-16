import "../sass/layout/_header.scss";

import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        Logo
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
    </header>
  );
};

export default Header;
