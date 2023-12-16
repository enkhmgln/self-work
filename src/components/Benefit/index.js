// Benefit.js

import BenefitCard from "@/components/BenefitCard";

const Benefit = () => {
  // Data for each card
  const cardsData = [
    { icon: "heart" },
    { icon: "global" },
    { icon: "lock" },
    { icon: undefined },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
        >
          <BenefitCard icon={card.icon} />
        </div>
      ))}
    </div>
  );
};

export default Benefit;
