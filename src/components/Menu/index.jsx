import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row  md:items-center py-2 md:p-0  items-start">
      <MenuItem url="/" text="benefits" />
      <MenuItem url="/" text="redeem" />
      <MenuItem url="/" text="book now" />
      <MenuItem url="/register" text="register now" />
    </div>
  );
};

export default Menu;
