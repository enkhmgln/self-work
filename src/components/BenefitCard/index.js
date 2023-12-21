import {FaRegHeart, FaLock, FaCheckCircle} from "react-icons/fa";
import {AiOutlineGlobal} from "react-icons/ai";
import img from '@/assets/images/spa.jpg'
import Image from "next/image";

const BenefitCard = ({ title, text}) => {

    return (
        <div className="w-full mx-28 m-2 bg-amber-300 md:w-1/2   ">
            <div className=" flex flex-col items-center ">
                <div className={'mb-2'}>
                    <Image src={img} alt={'picture'} width={1000} height={100} className={'h-96  w-   '}/>
                </div>
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="text-sm ">
                        {text}
                    </p>
                </div>

            </div>
        </div>

    );
};

export default BenefitCard;
