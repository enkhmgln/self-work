import Menu from "@/components/Menu";
import Logo from "../Logo";

const SideBar = ({ showSideBar, sidebarHandler }) => {
  return (
    <div
      onClick={sidebarHandler}
      className={`${
        showSideBar
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      } ease-in duration-300 absolute top-0 left-0 h-screen w-[280px] bg-white z-50 transform uppercase md:hidden flex items-start flex-col py-8 px-4`}
    >
      <Logo />
      <Menu />
    </div>
  );
};

export default SideBar;
