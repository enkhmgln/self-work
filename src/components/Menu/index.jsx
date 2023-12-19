import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row  md:items-center py-2 md:p-0  items-start">
      <MenuItem url="/" text="home" />
      <MenuItem url="/" text="why choose us " />
      {/* <MenuItem url="/" text=" now" /> */}
      <MenuItem url="/about" text="about" />
    </div>
  );
};

export default Menu;
