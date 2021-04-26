import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, title, keywords, description }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
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
