import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bycrypt from "bcryptjs";
import { authConfig } from "./auth.config";
const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("帳號錯誤");
    }
    const isPasswordCorrect = await bycrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("密碼錯誤");
    }
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("登入失敗，請確認後重新登入");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log({ user, account, profile });
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (e) {
          console.log(e);
          return false;
        }
      }
      if (account.provider === "google") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile.picture,
            });
            await newUser.save();
          }
        } catch (e) {
          console.log(e);
          return false;
        }
      }
      return true;
    },

    ...authConfig.callbacks,
  },
});
