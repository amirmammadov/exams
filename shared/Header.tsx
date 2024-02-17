"use client";

import { useState, useEffect } from "react";

import "../sass/layout/_header.scss";

import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../i18n/settings";
import { useTranslation } from "@/i18n/client";

import Link from "next/link";
import Image from "next/image";

const Header = ({ lng }: { lng: string }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(0);

  const { t } = useTranslation(lng);

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
        <div className="header__nav__item">{t("navbar.link1")}</div>
        <div className="header__nav__item">{t("navbar.link2")}</div>
        <div className="header__nav__item">{t("navbar.link3")}</div>
        <div className="header__nav__item">{t("navbar.link4")}</div>
        <div className="lang__switcher">
          <Trans i18nKey="languageSwitcher" t={t}>
            <span className="lang__switcher__item active">
              {lng === "az" ? "AZ" : "EN"}
            </span>{" "}
          </Trans>
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <span key={l} className="lang__switcher__item">
                  {index > 0 && " or "}
                  <Link href={`/${l}`} className="lang__switcher__item__link">
                    {l === "az" ? "AZ" : "EN"}
                  </Link>
                </span>
              );
            })}
        </div>
      </nav>
      <div className="header__btns">
        <button className="header__btns__signin">{t("navbar.link5")}</button>
        <button className="header__btns__signup">{t("navbar.link6")}</button>
      </div>
      <div
        className={`header__menu ${
          isMenuActive && windowSize < 992 && "active"
        }`}
      >
        <div className="header__menu__item">{t("navbar.link1")}</div>
        <div className="header__menu__item">{t("navbar.link2")}</div>
        <div className="header__menu__item">{t("navbar.link3")}</div>
        <div className="header__menu__item">{t("navbar.link4")}</div>
        <div className="header__menu__item">{t("navbar.link5")}</div>
        <div className="header__menu__item">{t("navbar.link6")}</div>
        <div className="lang__switcher">
          <Trans i18nKey="languageSwitcher" t={t}>
            <span className="lang__switcher__item active">
              {lng === "az" ? "AZ" : "EN"}
            </span>{" "}
          </Trans>
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <span key={l} className="lang__switcher__item">
                  {index > 0 && " or "}
                  <Link href={`/${l}`} className="lang__switcher__item__link">
                    {l === "az" ? "AZ" : "EN"}
                  </Link>
                </span>
              );
            })}
        </div>
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
