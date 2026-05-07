import Navbar from '../navbar/Navbar';
import {Shape} from "../logos/Footer.logos";
import { Shapes } from "../logos/Logos";
import { useContext } from 'react';
import {UserContext} from "../../context/UserContext";

export default function HeaderCarrerInner () {
    const { job } = useContext(UserContext);
    return (
        <header>
            <Navbar />
            <div className="containers flex justify-between py-24 px-27.5">
                <div>
                    <b className="pre-header text-paragColor">CAREER AT Ether</b>
                    <h1 className="main-header">{job || localStorage.getItem("proffesion")}</h1>
                    <p className="paragraph text-paragColor">Through True Rich Attended does no end it his mother <br /> 
                    since real had half every him case in packages.</p>

                    <button className="bg-blockColors flex items-center gap-3.25 py-5 px-8 relative mt-15">
                      <p className=" leading-6 font-medium text-secondaryColor">Apply Now</p>
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7071 8.07112C21.0976 7.6806 21.0976 7.04743 20.7071 6.65691L14.3431 0.292946C13.9526 -0.0975785 13.3195 -0.0975785 12.9289 0.292946C12.5384 0.68347 12.5384 1.31664 12.9289 1.70716L18.5858 7.36401L12.9289 13.0209C12.5384 13.4114 12.5384 14.0446 12.9289 14.4351C13.3195 14.8256 13.9526 14.8256 14.3431 14.4351L20.7071 8.07112ZM0 8.36401L20 8.36401V6.36401L0 6.36401L0 8.36401Z" fill="white"/>
                        </svg>

                        <Shape className='absolute left-0 top-0' />
                    </button>
                </div>
                <div className='bg-[#FFE0C7] p-[82px_110px_78px_80px] relative'>
                    <Shapes className="absolute top-0 right-0" />
                    <h2 className="text-2xl leading-9 font-semibold text-primaryColor">Job Description</h2>
                    <div className="flex gap-4 flex-col mt-6">
                        <p className="font-normal leading-6 text-boldColor">Remote, India , 4 to 5 Years Of Experience</p>
                        <p className="font-normal leading-6 text-boldColor">Department: Product Engineering</p>
                        <p className="font-normal leading-6 text-boldColor">Full Time 5 Position Available.</p>
                    </div>
                </div>
            </div>
        </header>
    )   
}