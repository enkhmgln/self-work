import Image from "next/image";
import img from '@/assets/images/ashiglajmgdgui3.jpg'
import img1 from '@/assets/images/ashiglajmgdgui2.jpg'
import img2 from '@/assets/images/ashiglajmgdgui.jpg'
import img3 from '@/assets/images/NewHOME.jpg'
import img4 from '@/assets/images/singleRoom.jpg'
import img5 from '@/assets/images/SuperiorDoubleRoom.jpg'

const Gallery = () => {
    return (
        <div className={' justify-center items-center mt-20 '}>
            <h1 className={'text-center text-4xl font-serif my-4 italic  '}>Our Gallery</h1>
            <div className={'w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10 p-4'}>
             <Image src={img} alt={'picture'} width={1000} height={100} />
                    <Image src={img1} alt={'picture'} width={1000} height={100} className={' border-2 '}/>
                    <Image src={img4} alt={'picture'} width={1000} height={100} className={' border-2'}/>
                    <Image src={img3} alt={'picture'} width={1000} height={100} className={' border-2'}/>
                    <Image src={img2} alt={'picture'} width={1000} height={100} className={' border-2'}/>
                    <Image src={img5} alt={'picture'} width={1000} height={100} className={' border-2'}/>

            </div>
        </div>
    )
}

export default Gallery;