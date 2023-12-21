import Image from "next/image";
import Link from 'next/link'
import { FaCheckCircle } from "react-icons/fa";


const RoomCard = ({title, text1,text2,text3,text4,text5,text6,img, size}) => {
    return (
        <div className={'w-full '}>
            <div className={'flex md:items-center justify-around m-2 flex-col md:flex-row bg-amber-100 '}>
                <div className={'text-xs md:text-xl p-2'}>
                    <h2 className={'py-4'}>Room name : {title}</h2>
                    <p><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>size : {size}</p>
                    <ul className={'text-start'}>
                        <li><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{text1}</li>
                        <li><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{text2}</li>
                        <li><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{text3}</li>
                        <li><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{text4}</li>
                        <li><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{text5}</li>
                        {text6 &&                        <li><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{text6}</li>
                        }
                    </ul>
                </div>
                <Link href={'/'} className={'  hover:brightness-125 '}>
                    <Image src={`${ img.src}`} alt={'pic'} className={'w-[100%] object-contain hover:scale-105 ease-in duration-300 transition-all '} width={1000} height={100}/>
                </Link>
            </div>
        </div>)
}


export default RoomCard