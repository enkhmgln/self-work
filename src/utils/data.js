import img1 from '@/assets/images/lounge1.jpg'
import img2 from '@/assets/images/lounge2.jpg'
import img3 from '@/assets/images/lounge3.jpg'
import img4 from '@/assets/images/lounge4.jpg'

export const thingsInEveryRoom = ['Bar',
    'Free parking', 'Fitness centre', 'Spa and wellness centre',
    'Non-smoking rooms', 'Dining table ', 'Airport shuttle (free)', 'Indoor swimming pool',
    'Entire unit wheelchair accessible', 'Toilet paper', 'Wardrobe or closet', 'Tumble dryer', 'Clothes rack',
    'Laptop safe', 'Cable channels', 'Electric kettle', 'Carpeted', 'Wake up service/Alarm clock', 'Towels/sheets',
    'Heating ', 'Hairdryer', 'Satellite channels', 'Telephone ', 'Slippers ', 'Mosquito net', 'Desk ,Seating Area',
    'TV', 'Socket near the bed', 'Linen', 'Towels', 'Bath or shower', 'Sofa', 'Toilet', 'Safety deposit box', 'Exceptional breakfast', 'Free cancellation', 'No prepayment needed', 'Free toiletries', 'Bathrobe'];
export const RoomsInfo = [
    {title : "Superior Double Room",
        size : '30 m²',
        text : ['Air conditioning' ,'Ensuite bathroom' ,'Flat-screen' ,'TV' , 'Minibar','Free WiFi'],
        img:img1

    },{
    title:'Deluxe Suite Twin Room',
        size:'47 m²',
        text : ['Private suite','Air conditioning','Ensuite bathroom','Flat-screen','TV','Free WiFi','Minibar'],
        reverse:true,
        img:img2
    },
    {
        title:'Family Junior Suite',
        size:'63 m²',
        text:['Air conditioning','Spa bath','Ensuite bathroom','Flat-screen','TV','Free WiFi','Coffee machine']
        , img:img3
    },
    {
        title:'Superior Single Room',
        size:'47 m²',
        text:['Private suite','Mountain view','Air conditioning','Flat-screen','Minibar','Ensuite bathroom'],
        reverse:true,
        img:img4
    }

]