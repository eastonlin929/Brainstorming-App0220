import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>抱歉，此頁面不存在</p>
      <Link href="/">返回首頁</Link>
    </div>
  );
};

export default NotFound;
