import { MdOutlineAccessTimeFilled, MdEmail } from "react-icons/md";
import { FaPhone ,FaArrowAltCircleRight} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className=" md:h-[30vh] bg-red-800 flex justify-around items-start md:items-center flex-col md:flex-row p-4 text-white font-thin">
            <div className={'text-sm my-4'}>
                <h2 className={'py-2 text-xl'}>CONTACT US</h2>
                <ul>
                    <li className={'py-2'}>
                        <FaPhone style={{display:'inline' , marginRight:'4px' ,fontSize:'15px'}}/>
                        976-7736-6666</li>
                    <li className={'py-2'}>
                        <FaPhone style={{display:'inline' , marginRight:'4px' ,fontSize:'15px'}}/>
                        976-7736-6666</li>
                    <li><MdEmail style={{display:'inline' , marginRight:'4px' ,fontSize:'15px'}}/>reservation@ubinnhotel.com</li>
                </ul>
            </div>
            <div className={'text-xs my-6'} >
                <h2 className={'py-2 text-xl'}>OUR LOCATION</h2>
                    <p ><FaLocationDot style={{display:'inline' , marginRight:'4px' ,fontSize:'15px'}} />

                        Ulaanbaatar, Mongolia
                        Chingeltei district, 5th khoroo
                        Sambuu street 35/41
                        </p>
            </div>
            <div className={'text-sm my-6'}>
                <h2 className={'py-2 text-xl'}>TIME SCHEDULE</h2>
                <ul>
                    <li className={'py-2'}> <MdOutlineAccessTimeFilled style={{display:'inline' , marginRight:'4px' ,fontSize:'20px'}} />
                        Monday-Sunday: 06:30-22:00</li>
                    <li className={'py-2'}> <MdOutlineAccessTimeFilled style={{display:'inline' , marginRight:'4px' ,fontSize:'20px'}} />
                        Monday-Sunday: 06:30-22:00</li>
                </ul>
            </div>
            <div className={'text-xs my-6'}>
                <h2 className={'py-2 text-xl'}>USEFUL LINKS</h2>
                <ul>
                    <li className={'py-2'}><FaArrowAltCircleRight style={{display:'inline' , marginRight:'4px' ,fontSize:'20px'}} />
                        Terms of use</li>
                    <li className={'py-2'}><FaArrowAltCircleRight style={{display:'inline' , marginRight:'4px' ,fontSize:'20px'}} />
                        Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
