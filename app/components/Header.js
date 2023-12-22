import Image from "next/image";
import styles from "../styles/page.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["logo-container"]}>
        <Image src="/icon.svg" width={18} height={14} alt="Logo" />
        <Image src="/logo.png" width={126} height={20} alt="Logo" />
      </div>
      <div className={styles["user-container"]}>
        <div className={styles["profile-picture"]}>
          <span>N</span>
        </div>
        <p className={styles.username}>Nome do Usuário Aqui</p>
        <Image src="/arrow-down.svg" width={16} height={9} alt="Logo" />
      </div>
    </header>
  );
};
export default Header;
