"use client";
import { useEffect } from "react";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/lib/action";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="使用者名稱" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="密碼" name="password" />
      <input type="password" placeholder="密碼確認" name="passwordRepeat" />
      <button>註冊</button>
      <div className={styles.state}>{state?.error}</div>
      <Link href="/login">
        已經擁有帳戶了？ <b>立即登入</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
