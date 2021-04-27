import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";

export default function Layout({ children, title, keywords, description }) {
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase />}

      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Events | Find the hottest parties",
  description: "Find the latest musical events.",
  keywords: "events, music, dj, edm",
};
