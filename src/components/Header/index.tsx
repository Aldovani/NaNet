import Link from "next/link";
import React from "react";
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
const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

const Header: React.FC = () => {
  return (
    <header className={`${style.header} ${inter.variable}`}>
      <Link href="/" className={style.logo}>
        N<span>N</span>
      </Link>

      <nav className={style.navigation}>
        <ul>
          <li>
            <Link href="/apis">
              <FiCpu size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Apis</span>
          </li>

          <li>
            <Link href="/colors">
              <FiDroplet size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Cores</span>
          </li>

          <li>
            <Link href="/library">
              <FiCode size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Bibliotecas</span>
          </li>

          <li>
            <Link href="/typography">
              <FiType size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Fontes</span>
          </li>

          <li>
            <Link href="/icons">
              <FiAward size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Ícones</span>
          </li>

          <li>
            <Link href="/image">
              <FiImage size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Imagens & Ilustrações</span>
          </li>

          <li>
            <Link href="/websites">
              <FiGlobe size={24} stroke="#868E96" />
            </Link>
            <span className={style.label}>Inspirações</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
