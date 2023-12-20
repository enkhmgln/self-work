import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebarHandler }) => {
  return (
    <div
      className={`bg-white uppercase flex justify-between items-center z-10 fixed top-0 left-0 w-[100%] px-2`}
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
