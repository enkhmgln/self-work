import Image from "next/image";
import Link from 'next/link'
import { FaCheckCircle } from "react-icons/fa";


const RoomCard = ({title, text,img, size,reverse}) => {
    return (
        <div className={'w-full '}>
            <div className={`flex md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between m-2 flex-col  bg-amber-100 `}>
                <div className={'text-xs md:text-xl p-2'}>
                    <h2 className={'py-4'}>Room name : {title}</h2>
                    <p><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>size : {size}</p>
                    <ul className={'text-start'}>
                        {text.map((el,index)=> {
                            return <li key={index}><FaCheckCircle style={{display:'inline',paddingRight:'4px' ,fontSize:'20px'}}/>{el}</li>
                        })}
                    </ul>
                </div>
                <Link href={'/'} className={'  hover:brightness-125 '}>
                    <Image src={img.src} alt={'picture'} className={'w-[100%] object-contain hover:scale-95 ease-in duration-300 transition-all '} width={1000} height={100}/>
                </Link>
            </div>
        </div>)
}


export default RoomCard