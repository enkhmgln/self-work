import RoomCard from "@/components/RoomCard";
import {RoomsInfo} from "@/utils/data";
import img from '@/assets/images/lounge2.jpg'
import bg from '@/assets/images/background.jpg'

const RoomCardWrapper = () => {
    return (
        <div className={'flex flex-col md:flex-row flex-wrap justify-center items-center p-2  md:px-20 md:py-10'}
             style={{backgroundImage: `url(${bg.src})`}}>
            {RoomsInfo.map((el, index) => {
                return <RoomCard
                    key={index}
                    title={el.title}
                    img={el.img}
                    reverse={el.reverse}
                    size={el.size}
                    text={el.text}/>
            })}
        </div>
    )
}

export default RoomCardWrapper;