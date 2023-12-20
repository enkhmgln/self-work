import Image from "next/image";
import Link from 'next/link'

const RoomCard = ({title, text,img}) => {
    return (
        <div className={'w-full md:w-1/3 lg:1/4    '}>
            <div className={'flex items-start flex-col-reverse  m-2  '}>
                <div className={'py-2'}>
                    <h2 className={'py-4 hover:text-main'}>{title}</h2>
                    <p className='text-main'>
                        {text}
                    </p>
                </div>
                <Link href={'/'} className={'hover:scale-105 ease-in duration-300 transition-all brightness-75 hover:brightness-125 '}>
                    <Image src={`${img.src}`} alt={'pic'} className={'w-[100%] object-contain '} width={1000} height={100}/>
                </Link>
            </div>
        </div>)
}


export default RoomCard