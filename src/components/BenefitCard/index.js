import Image from "next/image";

const BenefitCard = ({img, title, text}) => {

    return (
            <div className="w-full my-4 md:m-2 bg-blue-200">
            <div className=" flex flex-col items-center ">
                <div className={'mb-2'}>
                    <Image src={`${img.src}`} alt={'picture'} width={1000} height={100} className={'h-96 w-full rounded'}/>
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
