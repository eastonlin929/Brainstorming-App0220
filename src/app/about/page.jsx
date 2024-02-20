import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>關於本機構</h2>
        <h1 className={styles.title}>
          我們致力於創造更加大、更廣、更大膽及優秀的數位創意{" "}
        </h1>
        <p className={styles.desc}>
          我們致力於創造更加大、更廣、更大膽及優秀的數位創意
          我們相信好的主意、靈活性和精確性，我們的團隊是世界上最好的商務諮詢和財務解決方案提供者。
          提供廣泛的網路和軟體開發服務。
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>經驗</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>經驗</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>經驗</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" fill alt="About Image" className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
