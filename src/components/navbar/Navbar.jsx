import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";
const Navbar = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.png"
          alt=""
          height="50"
          width="192"
          className={styles.brandImg}
        />
      </Link>{" "}
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
