import RoomCard from "@/components/RoomCard";
import img from '@/assets/images/lounge3.jpg'
import img1 from '@/assets/images/lounge2.jpg'
import img2 from '@/assets/images/lounge1.jpg'
import img3 from '@/assets/images/lounge4.jpg'
// import img4 from '@/assets/images/'


const RoomCardWrapper = () => {
    return (
        <div className={'flex flex-col md:flex-row flex-wrap justify-center items-center px-8 md:px-20'}>
            <RoomCard title={'Superior Double Room'}
                      size={'30 m²'}
                      text1={ 'Air conditioning'}
                      text2={'Ensuite bathroom'}
                      text3={'Flat-screen'}
                      text4={' TV'}
                      text5={'Minibar'}
                      text6={'Free WiFi'}
                      img={img}/>
            <RoomCard title={'Deluxe Suite Twin Room'}
                      size={'47 m²'}
                      text1={'Private suite'}
                      text2={'Air conditioning'}
                      text3={'Ensuite bathroom'}
                      text4={'Flat-screen, TV, Free WiFi'}
                      text5={'Minibar'}
                      img={img1}/>
            <RoomCard title={'Family Junior Suite'}
                      size={'63 m²'}
                      text1={'Air conditioning'}
                      text2={'Spa bath'}
                      text3={'Ensuite bathroom'}
                      text4={'Flat-screen, TV, Free WiFi'}
                      text5={'Minibar'}
                      text6={'Coffee machine'}
                      img={img1}/>
            <RoomCard title={'Superior Single Room'}
                      size={'63 m²'}
                      text1={'Air conditioning'}
                      text2={'Spa bath'}
                      text3={'Ensuite bathroom'}
                      text4={'Flat-screen, TV, Free WiFi'}
                      text5={'Minibar'}
                      text6={'Coffee machine'}
                      img={img1}/><RoomCard title={'Deluxe Suite Single room'}
                      size={'47 m²'}
                      text1={'Private suite'}
                      text2={'Mountain view'}
                      text3={'Air conditioning'}
                      text4={'Flat-screen, TV, Free WiFi'}
                      text5={'Minibar'}
                      text6={'Ensuite bathroom'}
                      img={img1}/>
        </div>
    )
}

export default RoomCardWrapper;