import Image from "next/image";
import styles from "./home.module.css";
const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          腦力激盪<br></br>交易所
        </h1>
        <p className={styles.desc}>
          提供絕佳的創意及視覺創意，為您的網頁及公司形象注入更多活泉！{" "}
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>獲取更多資訊</button>
          <button className={styles.button}>聯絡我們</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Homepage;
