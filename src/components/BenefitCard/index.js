import {FaRegHeart, FaLock, FaCheckCircle} from "react-icons/fa";
import {AiOutlineGlobal} from "react-icons/ai";

const BenefitCard = ({img, title, text}) => {

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" flex flex-col items-center">
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="text-sm text-gray-600">
                        {text}
                    </p>
                </div>

            </div>
        </div>

    );
};

export default BenefitCard;
