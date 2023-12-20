import RoomCard from "@/components/RoomCard";
import img from '@/assets/images/lounge3.jpg'
import img1 from '@/assets/images/lounge2.jpg'
import img2 from '@/assets/images/lounge1.jpg'


const RoomCardWrapper = () => {
    return (
        <div className={'flex flex-col md:flex-row flex-wrap justify-center items-center px-8 md:px-20'}>
            <RoomCard title={'Suite'} text={ '$90\\PER NIGHT'} img={img}/>
            <RoomCard title={'Double room'} text={'$60\\PER NIGHT'} img={img1}/>
            <RoomCard title={'family room'} text={'$120\\PER NIGHT'} img={img2}/>
        </div>
    )
}

export default RoomCardWrapper;