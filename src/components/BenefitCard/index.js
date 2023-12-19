import { FaRegHeart, FaLock, FaCheckCircle } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const BenefitCard = ({ icon, title, text }) => {
  const getIcon = () => {
    switch (icon) {
      case "heart":
        return <FaRegHeart className="text-red-500 text-5xl" />;
      case "global":
        return <AiOutlineGlobal className="text-blue-500 text-5xl" />;
      case "lock":
        return <FaLock className="text-gray-500 text-5xl" />;
      default:
        return <FaCheckCircle className="text-green-500 text-5xl" />;
    }
  };
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4 flex flex-col items-center">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">{title || "Lorem Ipsum"}</h1>
        <p className="text-sm text-gray-600">
          {text ||
            "Simply dummy text of the printing and typesetting industry."}
        </p>
      </div>
      <div className="text-center">{getIcon()}</div>
    </div>
  );
};

export default BenefitCard;
