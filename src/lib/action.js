"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { Post, User } from "./models";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  "use server";
  try {
    console.log("sign out");
    await signOut();
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, img, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      img,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "發生一些錯誤" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "發生一些錯誤" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "發生一些錯誤" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "發生一些錯誤" };
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "兩次密碼不符，請確認後重新輸入" };
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "使用者名稱已經存在，請重新輸入" };
    }
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      img,
    });
    await newUser.save();
    console.log("save to db");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: "發生部分錯誤" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (e) {
    console.log(e.message);
    if (e.message.includes("CredentialsSignin")) {
      return { error: "帳號或密碼錯誤，請確認後重新輸入" };
    }
    throw e;
  }
};
