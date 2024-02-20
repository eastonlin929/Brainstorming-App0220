"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>新增使用者</h1>
      <input type="text" name="username" placeholder="使用者名稱" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="密碼" />
      <input type="text" name="img" placeholder="圖片" />
      <select name="isAdmin">
        <option value="false">是否具有管理權限</option>
        <option value="false">否</option>
        <option value="true">是</option>
      </select>
      <button>新增</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
