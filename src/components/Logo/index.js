"use client";
import Image from "next/image";
import img from "@/assets/images/logo1.svg";

const Logo = () => {
  return (
    <div className=" w-[80px] h-[80px] mx-2 md:my-auto flex justify-center items-center">
      <Image src={img} width={"auto"} height={"auto"} alt="logo" />
    </div>
  );
};

export default Logo;
