import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h1>Sorry, there is nothing here</h1>
        <Link href="/">
          <a>Go Back Home</a>
        </Link>
      </div>
    </Layout>
  );
}
