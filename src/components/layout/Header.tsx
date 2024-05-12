import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">logo</Link>
      </h1>
      <nav>
        <Link href="/about">about</Link>
        <Link href="/post">post</Link>
      </nav>
    </header>
  );
}
