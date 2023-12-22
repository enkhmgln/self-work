import Hero from "@/components/Hero";
import hero from '@/assets/images/singleRoom.jpg'
import Intro from "@/components/Intro";

const About = () => {
    return (
        <>
            <div>
                <Hero hero={hero} bright text={'About'} />
            </div>
            <Intro/>
        </>
    );
};

export default About;
