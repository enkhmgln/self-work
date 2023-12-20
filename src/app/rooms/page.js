import Hero from "@/components/Hero";
import RoomCardWrapper from "@/components/RoomCardWrapper/RoomCardWrapper";

const Rooms = () => {
    return (<div className={'font-mono '}>

        <Hero height/>
        <div className={'h-[30vh] text-center my-10 p-10 md:my-5 md:px-10'}>
            <h1 className={'font-bold text-2xl md:text-4xl py-3'}>Rooms & Suites</h1>
            <p className={'font-thin py-2 text-xl'}>At our hotel, there is a variety of rooms to choose from. Whether you are a casual
                traveler or a person
                demanding luxury wherever you go, you won’t be disappointed.</p>
        </div>
        <RoomCardWrapper/>
    </div>)
}

export default Rooms