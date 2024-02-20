import { Post, User } from "./models";
import { connectToDb } from "./utils";
//暫時性資料
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 3 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (e) {
    console.log("getPosts has some errors:" + e);
    // throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    console.log(slug);
    const post = await Post.findOne(slug);
    return post;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch posts!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch user!");
  }
};
