import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebarHandler }) => {
  return (
    <div
      className={`flex md:justify-between items-center p-4 md:p-2 uppercase bg-inherit text-white z-10 absolute top-0 left-0 md:px-103`}
    >
      <div
        className="block md:hidden font-black text-2xl"
        onClick={sidebarHandler}
      >
        <GiHamburgerMenu />
      </div>
      <Logo />
      <nav className="hidden md:block">
        <Menu />
      </nav>
    </div>
  );
};

export default Navbar;
