"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>增加新的貼文</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="標題" />
      <input type="text" name="slug" placeholder="尾端連結" />
      <input type="text" name="img" placeholder="圖片" />
      <textarea type="text" name="desc" placeholder="內容" rows={10} />
      <button>新增</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
