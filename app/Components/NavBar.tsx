'use client';
import React from 'react';
import { FaFish } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [nav, setNav] = useState(false);

  function handleMouse() {
    setNav(!nav);
  }

  return (
    <header className="nav_wrapper">
      <p className="nav_name">Akilah Davis</p>
      <FaFish
        className={nav ? 'fa-fish rotate' : 'fa-fish'}
        onMouseEnter={handleMouse}
      />

      <nav className={nav ? 'navbar ' : 'navbar active_nav'}>
        <ul
          className="nav_ul"
          onMouseLeave={handleMouse}>
          <li>
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
