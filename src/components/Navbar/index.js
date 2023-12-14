import Menu from "@/components/Menu";
import SideBar from "@/components/Sidebar";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="block md:hidden">
        <SideBar />
      </div>
      <Logo />
      <nav className="hidden md:block">
        <Menu />
      </nav>
    </div>
  );
};

export default Navbar;
