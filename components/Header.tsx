import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="absolute z-10 w-screen text-white">
      <div className="flex p-5">
        <h2>Logo</h2>
        <ul className="flex ms-auto gap-10 text-lg font-bold">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Our Team</Link>
          </li>
          <li>
            <Link href="#">Career</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
