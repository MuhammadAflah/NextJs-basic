import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>Home page</div>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default page;
