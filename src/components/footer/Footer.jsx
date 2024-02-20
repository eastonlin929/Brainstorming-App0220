import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>EastonLin</div>
      <div className={styles.text}>
        Easton creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
