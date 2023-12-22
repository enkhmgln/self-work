"use client";
import Image from "next/image";
import img from "@/assets/images/logowhite.jpg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className=" w-[100px] h-[80px] mx-2 md:my-auto flex justify-center items-center"
    >
      <Image
        src={img}
        width={"auto"}
        height={"auto"}
        alt=" Logo "
        priority={true}
      />
    </Link>
  );
};

export default Logo;
