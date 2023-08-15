import Link from "next/link";

const Header = () => (
  <header className="flex justify-center p-4 md:justify-between">
    <h1>Logo</h1>
    <nav className="hidden md:flex">
      <Link href="#">Experience</Link>
      <Link href="#">About</Link>
      <Link href="#">Blog</Link>
      <Link href="#">Contact</Link>
    </nav>
  </header>
);

export default Header;
