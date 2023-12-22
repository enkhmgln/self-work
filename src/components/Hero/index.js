import Image from "next/image";

const Hero = (props) => {
  return (
    <div className="flex justify-center text-center items-center flex-col  text-white">
      <div className={`w-full h-full ${props.bright && 'brightness-50'}  `}>
        <Image src={props.hero} alt="pic" className="w-full object-cover h-screen"  width={1000} height={1000}  />
      </div>
      <div className="flex justify-center items-center absolute top-auto left-auto flex-col">
        <h1 className=" uppercase py-2 md:py-4 text-2xl md:text-6xl">
          <span className=" text-blue-500">{props.text}</span> {props.text2}
        </h1>
        {/*<h2 className=" italic md:text-xl font-thin ">*/}
        {/*  <CiLocationOn style={{ display: "inline" }} /> Ulaanbaatar, Mongolia*/}
        {/*</h2>*/}
      </div>
    </div>
  );
};

export default Hero;
