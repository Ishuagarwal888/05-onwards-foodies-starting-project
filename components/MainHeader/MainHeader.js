import Link from "next/link";
import Logo from "@/assets/logo.png";
import s from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBack from "./MainHeaderBack";
import NavLinkCompo from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBack />
      <header className={s.header}>
        <Link href="/" className={s.logo}>
          <Image src={Logo} alt="a plate full of food" priority />
          NextLevel food
        </Link>
        <NavLinkCompo />
      </header>
    </>
  );
};

export default MainHeader;
