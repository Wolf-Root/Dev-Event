import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

          <p>DevEvent</p>
        </Link>

        <ul className="list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Events">Events</Link>
          </li>
          <li>
            <Link href="/CreateEvent">Create Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
