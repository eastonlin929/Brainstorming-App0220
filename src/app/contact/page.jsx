import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="手機號碼（選填）" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="留言"
          ></textarea>
          <button>送出</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
