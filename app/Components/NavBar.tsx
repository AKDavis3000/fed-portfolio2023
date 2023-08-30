import React from 'react';
import { FaFish } from 'react-icons/fa';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="nav_wrapper">
      <p className="nav_name">Akilah Davis</p>
      <FaFish className="fa-fish" />

      <nav className="navbar">
        <ul className="nav_ul">
          <li>
            {/* capitalize? */}
            <Link
              className="nav_links"
              href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav_links"
              href="/Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="nav_links"
              href="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
