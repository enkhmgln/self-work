import { FaRegHeart, FaLock, FaCheckCircle } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const BenefitCard = ({ icon, title, text }) => {

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4 flex flex-col items-center">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-600">
          {text }
        </p>
      </div>
      <div className="text-center">{icon}</div>
    </div>
  );
};

export default BenefitCard;
