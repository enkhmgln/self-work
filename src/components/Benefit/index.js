import BenefitCard from "@/components/BenefitCard";
import img from '@/assets/images/DeluxeSuiteTwinRoom.jpg'
import img1 from '@/assets/images/SuperiorDoubleRoom.jpg'
import img2 from '@/assets/images/singleRoom.jpg'
import img3 from '@/assets/images/NewHOME.jpg'

const Benefit = () => {
    return (<div className=" flex  flex-col md:flex-row bg-blue-50">

        <BenefitCard title={'Hello '} text={'description'} img={img}/>
        <BenefitCard title={'Hello '} text={'description'} img={img1}/>
        <BenefitCard title={'Hello '} text={'description'} img={img2}/>
        <BenefitCard title={'Hello '} text={'description'} img={img3}/>


    </div>);
};

export default Benefit;
