"use client";
// import { useEffect } from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/action";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  // const router = useRouter();
  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);
  return (
    <div>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="使用者名稱" name="username" />
        <input type="password" placeholder="密碼" name="password" />
        <button>登入</button>
        <div className={styles.state}>{state?.error}</div>
        <Link href="/register">
          {"還沒有帳號？"} <b>立即註冊一個</b>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
