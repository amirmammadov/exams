import "../sass/layout/__footer.scss";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currenctYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <Link href="/" className="footer__top__logo">
          <Image src="/icons/logo.png" alt="logo" width={85} height={35} />
        </Link>
        <div className="footer__top__links">
          <div className="footer__top__links__item">Haqqımızda</div>
          <div className="footer__top__links__item">Kitablar</div>
          <div className="footer__top__links__item">İmtahanlar</div>
          <div className="footer__top__links__item">Bizimlə əlaqə</div>
          <select
            name="lang"
            id="lang"
            autoComplete="off"
            className="footer__top__links__option"
          >
            <option value="AZ">AZ</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__content__item">
          <Image
            src="/icons/mail.png"
            alt="mail"
            width={30}
            height={30}
            className="footer__content__item__img"
          />
          <div className="footer__content__item__text">Nümunə@gmail.com</div>
        </div>
        <div className="footer__content__item">
          <Image
            src="/icons/phone.png"
            alt="phone"
            width={30}
            height={30}
            className="footer__content__item__img"
          />
          <div className="footer__content__item__text">000 000 00 00</div>
        </div>
      </div>
      <div className="footer__social">
        <Image
          src="/icons/instagram.png"
          alt="instagram"
          width={30}
          height={30}
          className="footer__social__img"
        />
        <Image
          src="/icons/facebook.png"
          alt="facebook"
          width={30}
          height={30}
          className="footer__social__img"
        />
        <Image
          src="/icons/whatsapp.png"
          alt="whatsapp"
          width={30}
          height={30}
          className="footer__social__img"
        />
        <Image
          src="/icons/telegram.png"
          alt="telegram"
          width={30}
          height={30}
          className="footer__social__img"
        />
      </div>
      <div className="footer__divider" />
      <div className="footer__rights">
        © {currenctYear}, şirkərin adı. Bütün hüquqlar qorunur
      </div>
    </footer>
  );
};

export default Footer;
