/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";
import MenuButton from "../ui/MenuButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const changescrolled = () => {
    window.scrollY >= 10 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, []);
  return (
    <header
      className={`h-20 px-6 fixed left-0 right-0 flex items-centerz z-10  ${
        scrolled ? "bg-white" : "bg-noise-bg bg-noise text-white"
      }`}
    >
      <div className=" max-w-6.5xl mx-auto flex justify-between items-center w-full">
        <div>
          {!scrolled && (
            <img src="/icons/cinnamon-logo.svg" className="w-40" alt="logo" />
          )}
          {!!scrolled && (
            <img src="/icons/logo-dark.svg" alt="logo" className="w-40" />
          )}
        </div>
        <div className=" items-center gap-8 hidden lg:flex">
          <ul className="flex items-center">
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="about-us">About us</NavLink>
            </li>
            <li>
              <NavLink href="careers">Careers</NavLink>
            </li>
            <li>
              <NavLink href="blog">Blog</NavLink>
            </li>
          </ul>
          <MenuButton scrolled={scrolled} />
          <Button href="/contact">Contact Us</Button>
        </div>
        <div className="lg:hidden">
        {!!scrolled && <img src="/icons/mobile-menu-icon-dark.svg" alt="mobile icon" />}
          {!scrolled && <img src="/icons/mobile-menu-icon-light.svg" alt="mobile icon" />}
        </div>
      </div>
    </header>
  );
}
