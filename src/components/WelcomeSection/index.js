import Image from "next/image";
import img from '@/assets/images/ws.jpg'

const WelcomeSection = () => {
    return (
        <div className={'flex justify-center flex-col md:flex-row items-center gap-10 p-5 md:my-4'}>
            <div className={'w-full  md:w-1/3 '}>
<Image src={img} alt={'image'} className={'w-full h-full rounded object-contain'}/>
            </div>
            <div className={'w-full md:w-1/3 font-mono text-thin'}>
                <h1 className={'py-4'}>Welcome to Terelj hotel
                </h1>
                <h2 className={'text-sm '}>Peak is a family-owned hotel that desires to cater and provide guests with personalized hospitality based on what they prefer.

                </h2>
                <h2 className={'text-sm mt-4'}>While we aim to give you an authentic experience whenever you stay with us, we also guarantee consistent high standards of customer service at Roof. Contemporary amenities and timeless elegance are reflected throughout every guest room at our luxury hotel. We hope to make your stay unforgettable in the best way.

                </h2>
            </div>
        </div>
    )
}

export default  WelcomeSection;