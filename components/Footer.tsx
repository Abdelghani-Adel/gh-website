import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary p-20 text-white grid 2xl:grid-cols-3 gap-5">
      <div>
        <h2 className="text-3xl mb-8">Contact</h2>
        <p>Business oncultant</p>
        <p>+43 699 15872826</p>
        <p>info@gh360.de</p>
        <p>(+49) 790 78799 0023</p>
      </div>

      <div className="2xl:border-l border-l-white flex 2xl:ps-20">
        <div>
          <h2 className="text-3xl mb-8">Menu</h2>
          <div className="flex flex-col">
            {" "}
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Career</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>

      <div className="2xl:border-l border-l-white flex 2xl:ps-20">
        <div>
          <h2 className="text-3xl mb-8">Instagram</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
