import { Inter } from "next/font/google";
import style from "../styles/NotFound.module.scss";
import { FiFrown } from "react-icons/fi";
import Link from "next/link";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  weight: "700",
});

export default function NotFound() {
  return (
    <div className={`${style.container} ${inter.variable}`}>
      <div className={style.web}>
        <div className={style.header}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={style.body}>
          <h1>
            <span>4</span>
            <FiFrown size={82} />
            <span>4</span>
          </h1>
          <p>
            Oops! Parece que você encontrou um link quebrado ou uma página que
            não existe mais. Desculpe pelo transtorno!
          </p>
          <Link href="/">Voltar</Link>
        </div>
        <div className={style.footer}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
