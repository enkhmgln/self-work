import Hero from "@/components/Hero";
import RoomCardWrapper from "@/components/RoomCardWrapper/RoomCardWrapper";
import hero from '@/assets/images/wasd.jpg'
import RoomCard from "@/components/RoomCard";
import {FaCheckCircle} from "react-icons/fa";

const Rooms = () => {
    return (<div className={'font-mono '}>

        <Hero bright hero={hero} text={'Rooms'}/>
        <div className={' text-center my-4 px-2   md:my-5 md:px-10'}>
            <h1 className={'font-bold text-2xl md:text-4xl py-3'}>Rooms & Suites</h1>
            <p className={'font-thin py-2 text-xl'}>At our hotel, there is a variety of rooms to choose from. Whether you are a casual
                traveler or a person
                demanding luxury wherever you go, you won’t be disappointed.</p>
        </div>
        <RoomCardWrapper/>

            <div className={'flex flex-col justify-center items-center p-10 bg-slate-50 my-6 text-xs'}>
            <h2 className={'py-4 text-sm md:text-lg'}>Things in every room : </h2>
            <ul className={'grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-thin '}>
                <li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>Exceptional breakfast,Free cancellation,No prepayment needed</li>
                <li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>Free toiletries ,Bathrobe ,
                    Safety deposit box ,Toilet, Sofa ,Bath or shower, Towels ,Linen ,Socket near the bed</li>
                <li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>Desk ,Seating Area ,
                    TV ,Slippers ,Mosquito net ,Telephone </li>
                <li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>Satellite channels ,Heating ,Hairdryer ,Towels/sheets ,(extra fee) ,
                    Wake up service/Alarm clock</li>
                <li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>Carpeted ,Electric kettle ,Cable channels ,Wake-up service ,Laptop safe ,Tumble dryer
                    ,Wardrobe or closet ,Dining table
                    Entire unit wheelchair</li>
                <li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>accessible,Indoor swimming pool,Airport shuttle (free),
                    Non-smoking rooms,Spa and wellness centre,Fitness centre,Room service,Free parking,Bar</li>
            </ul>
        </div>
    </div>)
}

export default Rooms