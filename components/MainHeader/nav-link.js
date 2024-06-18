"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./nav-link.module.css";

const NavLinkCompo = () => {
  const path = usePathname();
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? s.active : ""}
          >
            Browser Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path.startsWith("/community") ? s.active : ""}
          >
            Foodzie Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinkCompo;
