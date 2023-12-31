import Hero from "@/components/Hero";
import RoomCardWrapper from "@/components/RoomCardWrapper/RoomCardWrapper";
import hero from '@/assets/images/ashiglajmgdgui3.jpg'
import {FaCheckCircle} from "react-icons/fa";
import {thingsInEveryRoom} from "@/utils/data";

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

            <div className={'flex flex-col justify-center items-center p-10 bg-amber-200 my-6 text-xs'}>
            <h2 className={'py-4 text-sm md:text-lg'}>Things in every room : </h2>
            <ul className={'grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-xs font-thin '}>
                {/*<li className={'py-2'}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>Exceptional breakfast,Free cancellation,No prepayment needed</li>*/}
                {thingsInEveryRoom.map((el,index)=> {
                    return <li  className={'py-2'} key={index}>
                        <FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>
                        {el}
                    </li>
                })}
            </ul>
        </div>
    </div>)
}

export default Rooms