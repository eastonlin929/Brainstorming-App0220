import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.auth}>
            <Image
              src="/github.png"
              width="30"
              height="30"
              alt=""
              className={styles.authimg}
            />
            使用Github帳戶登入
          </button>
        </form>
        <form action={handleGoogleLogin}>
          <button className={styles.auth}>
            <Image
              src="/google.png"
              width="30"
              height="30"
              alt=""
              className={styles.authimg}
            />
            使用Google帳戶登入
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
