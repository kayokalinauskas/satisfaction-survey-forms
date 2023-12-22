"use client";

import styles from "./styles/page.module.scss";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["background"]}></div>
      <Header />
      <p className={styles["title-label"]}>Pesquisa de Satisfação</p>
      <div className={styles["form-container"]}>
        <h1>Pesquisa de Satisfação</h1>
        <FormContainer />
      </div>
    </main>
  );
}
