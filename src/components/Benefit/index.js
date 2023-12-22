import BenefitCard from "@/components/BenefitCard";
import img from '@/assets/images/DeluxeSuiteTwinRoom.jpg'
import img1 from '@/assets/images/SuperiorDoubleRoom.jpg'
import img2 from '@/assets/images/singleRoom.jpg'
import img3 from '@/assets/images/NewHOME.jpg'

const Benefit = () => {
    return (<div className=" flex p-4  flex-col md:flex-row px-2 bg-blue-50">

        <BenefitCard title={'More flexibility '} text={'No blackout dates. Combine Cash & Points'} img={img}/>
        <BenefitCard title={'More simplicity '} text={'Fixed points redemption value of 15 Points to US$1'} img={img1}/>
        <BenefitCard title={'More privileges '} text={'Exclusive member rate and monthly offers'} img={img2}/>
        <BenefitCard title={'More recognition '} text={'Earn status when you stay, dine, or shop with us'} img={img3}/>


    </div>);
};

export default Benefit;
