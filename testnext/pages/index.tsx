import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Link href={"/about"}>About</Link>
      <hr />
      <Link href={"/products"}>Products</Link>
      <hr />
      <Link href={"houses"}>Houses</Link>
    </div>
  );
}
