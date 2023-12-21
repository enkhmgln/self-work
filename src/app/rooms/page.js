import Hero from "@/components/Hero";
import RoomCardWrapper from "@/components/RoomCardWrapper/RoomCardWrapper";
import hero from '@/assets/images/wasd.jpg'

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
    </div>)
}

export default Rooms