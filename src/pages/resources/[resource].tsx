import { Inter } from "next/font/google";
import style from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "@/services/firebase";

type ILinks = {
  url: string;
  imageUrl: string;
  name: string;
  category: string;
};

interface IResource {
  links: ILinks[];
  category: {
    name: string;
    description: string;
  };
}
type Resource =
  | "apis"
  | "colors"
  | "libraries"
  | "icons"
  | "images"
  | "websites"
  | "typographies";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export default function Resource({ links, category }: IResource) {
  const title = `${category.name} - NaNet`;
  return (
    <div className={inter.variable}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={category.description} />
      </Head>

      <header className={style.header}>
        <h1>
          {category.name}
          <span> ({links.length.toString().padStart(2, "0")})</span>
        </h1>
        <p>{category.description}</p>
      </header>
      <main className={style.main}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className={style.item}
          >
            <Image alt="" src={link.imageUrl} width={80} height={80} />
            <h3>{link.name}</h3>
            <span>{category.name}</span>
          </Link>
        ))}
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { resource: "apis" } },
      { params: { resource: "colors" } },
      { params: { resource: "libraries" } },
      { params: { resource: "icons" } },
      { params: { resource: "images" } },
      { params: { resource: "websites" } },
      { params: { resource: "typographies" } },
    ],

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { resource } = context.params as { resource: Resource };

  const categories = {
    apis: {
      name: "Apis",
      description: `
      Apis publica que voce pode acessa e testar no seus projetos de
      programação
      `,
    },
    colors: {
      name: "Cores",
      description: `
     Oferecem uma variedade de cores e combinações para ajudar a tornar seu design mais atraente 
      e profissional.
      `,
    },
    libraries: {
      name: "Bibliotecas",
      description:
        "Essas bibliotecas oferecem uma variedade de recursos, como componentes reutilizáveis, frameworks de estilo e bibliotecas de animação, para ajudar a acelerar o desenvolvimento de interfaces do usuário atraentes e responsivas.",
    },
    icons: {
      name: "Ícones",
      description: `
      Esses ícones são úteis para adicionar uma dimensão visual ao seu design, ajudando a torná-lo mais intuitivo e fácil de usar.

Imagens e ilustrações:
      `,
    },
    images: {
      name: "Imagens & Ilustrações",
      description: `
      Essas imagens e ilustrações são úteis para ilustrar suas ideias, dar uma identidade visual à sua marca ou adicionar uma dimensão artística ao seu design.
      `,
    },
    websites: {
      name: "Blogs e Websites",
      description: `
      Esses recursos oferecem uma variedade de conteúdos, como tutoriais, dicas, análises de tendências e muito mais, ajudando você a se manter atualizado com as últimas novidades em programação.
      `,
    },
    typographies: {
      name: "Fontes",
      description: `Essas fontes oferecem uma variedade de opções de estilo e design, ajudando a tornar seu texto mais atraente e legível`,
    },
  };

  if (!Object.hasOwn(categories, resource)) {
    return {
      notFound: true,
      props: {},
    };
  }

  const resources = collection(database, "recursos");
  const q = query(resources, where("category", "==", resource));
  let links: ILinks[] = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const { name, imageUrl, url, category } = doc.data();
    links.push({ name, imageUrl, url, category });
  });

  return {
    props: {
      links,
      category: categories[resource],
    },
    revalidate: 60 * 60, //1 dia
  };
};
