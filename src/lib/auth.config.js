export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      //只有管理員才能看到管理面板
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //只有登入者才能看見blog頁面
      if (isOnBlogPage && !user) {
        return false;
      }

      //只有未登入者可以進入登入頁面
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
