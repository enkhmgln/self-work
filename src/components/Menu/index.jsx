import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row  md:items-center py-2 md:p-0  items-start">
      <MenuItem url="/" text="home" />
      <MenuItem url="/rooms" text="rooms " />
      <MenuItem url="/about" text="meetings & special events" />
      <MenuItem url="/about" text="services and facilities" />

        <MenuItem url="/about" text="about" />
      <MenuItem url="/gallery" text="gallery" />
    </div>
  );
};

export default Menu;
