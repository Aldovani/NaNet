import Link from "next/link";
import React, { useState } from "react";
import {
  FiAward,
  FiCode,
  FiCpu,
  FiDroplet,
  FiGlobe,
  FiImage,
  FiType,
} from "react-icons/fi";

import style from "./style.module.scss";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

const Header: React.FC = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  const router = useRouter();
  const { resource } = router.query;

  function handleCloseMenu() {
    setIsOpenNavigation(false);
  }

  return (
    <div className={style.container}>
      <header className={`${style.header} ${inter.variable}`}>
        <div className={style["container-menu"]}>
          <Link href="/" className={style.logo}>
            N<span>N</span>
          </Link>

          <button
            onClick={() => setIsOpenNavigation((prev) => !prev)}
            className={`${style.menu} ${isOpenNavigation && style.active}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          className={`${style.navigation} ${isOpenNavigation && style.active}`}
        >
          <ul>
            <li className={resource === "apis" ? style.active : ""}>
              <Link href="/resources/apis" onClick={handleCloseMenu}>
                <FiCpu size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Apis</span>
            </li>

            <li className={resource === "colors" ? style.active : ""}>
              <Link href="/resources/colors" onClick={handleCloseMenu}>
                <FiDroplet size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Cores</span>
            </li>

            <li className={resource === "libraries" ? style.active : ""}>
              <Link href="/resources/libraries" onClick={handleCloseMenu}>
                <FiCode size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Bibliotecas</span>
            </li>

            <li className={resource === "typographies" ? style.active : ""}>
              <Link href="/resources/typographies" onClick={handleCloseMenu}>
                <FiType size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Fontes</span>
            </li>

            <li className={resource === "icons" ? style.active : ""}>
              <Link href="/resources/icons" onClick={handleCloseMenu}>
                <FiAward size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Ícones</span>
            </li>

            <li className={resource === "images" ? style.active : ""}>
              <Link href="/resources/images" onClick={handleCloseMenu}>
                <FiImage size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Imagens & Ilustrações</span>
            </li>

            <li className={resource === "websites" ? style.active : ""}>
              <Link href="/resources/websites" onClick={handleCloseMenu}>
                <FiGlobe size={24} stroke="#868E96" />
              </Link>
              <span className={style.label}>Blogs & Websites</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
