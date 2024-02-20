"use client";
import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
const Links = ({ session }) => {
  const links = [
    {
      title: "首頁",
      path: "/",
    },
    {
      title: "關於",
      path: "/about",
    },
    {
      title: "聯絡我們",
      path: "/contact",
    },
    {
      title: "貼文區",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "管理區", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>登出</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "登入", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLink item={{ title: "管理區", path: "/admin" }} />
              )}
              <form action={handleLogout}>
                <button className={styles.logout}>登出</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "登入", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
