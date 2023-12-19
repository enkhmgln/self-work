import Image from "next/image";
import hero from "@/assets/images/ws.jpg";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col  text-white">
      <div className="w-full h-full brightness-50">
        <Image src={hero} alt="pic" className="w-full object-cover h-screen" />
      </div>
      <div className="flex justify-center items-center absolute top-auto left-auto flex-col">
        <h1 className=" uppercase py-2 md:py-4 text-2xl md:text-6xl">
          <span className=" text-blue-500">terelj</span> hotel
        </h1>
        <h2 className=" italic md:text-xl font-thin ">
          <CiLocationOn style={{ display: "inline" }} /> Ulaanbaatar, Mongolia
        </h2>
      </div>
    </div>
  );
};

export default Hero;
