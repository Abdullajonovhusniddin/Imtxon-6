import HomeMadeShape from "../logos/Home.made.shapes";
import Navbar from "../navbar/Navbar";
import {Arrow} from '../logos/Footer.logos';
import logo from "/src/assets/svg/logo.svg";
import logo2 from "/src/assets/svg/logo2.svg";
import logo3 from "/src/assets/svg/logo3.svg";
import fullOffice from "/src/assets/img/full-office.png";
import { Shapes } from "../logos/Logos";
import { Link } from "react-router-dom";

export default function Header() {
       const personalInfo = [
        {
            img_path:logo,
            fullName:"Andrew Jonson"
        },

        {
            img_path:logo2,
            fullName:'Mathew Jasele'
        },

        {
            img_path:logo3,
            fullName:'Hussen Abakas'
        }
    ]


    return (
        <header>
            <Navbar />
            <div className="containers py-24 flex justify-between shrink-0 grow-0">
                <div>
                   <HomeMadeShape className='h-6 w-6 bg-pureColor' />    
                    <b className="pre-header text-boldColor mt-5.25 block">TREnding</b>
                    <h1 className="main-header text-primaryColor">Breaking the code How <br /> 
                    did we build our Figma <br /> 
                    plugin </h1>
                    <p className="paragraph text-paragColor">
                        It is a long established fact that a reader will be distracted by the readable <br /> 
                        content of a page when looking at its layout. The Maker is a decentralized. We <br />
                        aim to attain the.
                    </p>

                    <div className="m-[24px_0_40px] flex gap-3 items-center">
                        <Link to="/blog_inner_page" className="font-medium text-[18px] leading-6 text-carrerColor cursor-pointer">Read More</Link>   
                        <Arrow />  
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={logo} alt="logo icon" />
                        <p className="font-normal leading-6 text-primaryColor">Andrew Jonson</p>
                        <div className="border border-solid border-paragColor h-5">

                        </div>
                        <p className="font-normal leading-6 text-paragColor">Posted on 27th January 2021</p>
                    </div>

                    <div className='mt-12.25 relative'>
                        <svg className="absolute -right-4 -z-10" width="204" height="390" viewBox="0 0 204 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="203.775" y="9.13568e-06" width="390" height="203.775" transform="rotate(90 203.775 9.13568e-06)" fill="#444CFC"/>
                            <rect x="203.775" y="56.3579" width="333.642" height="203.775" transform="rotate(90 203.775 56.3579)" fill="#FFA155"/>
                            <rect x="203.775" y="56.3579" width="241.214" height="203.775" transform="rotate(90 203.775 56.3579)" fill="#FFD3AF"/>
                        </svg>
                        <img className='w-full' src={fullOffice} alt="full office" />
                    </div>
                </div>

                <div className="bg-blogColor relative py-18 pl-18 pr-19.25 h-[80%]">
                    <Shapes className = "absolute right-0 top-0" />
                    <div className="flex flex-col gap-12">
                        {
                            personalInfo.map(
                                person => 
                                    <div>
                            <h2 className="font-semibold leading-9 text-2xl text-primaryColor">Great design expectations <br /> 
                            prejudice in digital products <br /> 
                            in Next Year</h2>
                            <div className="mt-4 flex gap-3 items-center">
                                <img src={person.img_path} alt="" />
                                <span>
                                    <p className="font-normal leading-6 text-primaryColor">{person.fullName}</p>
                                    <p className="font-medium leading-5 text-[14px]">Jan 19, 2021</p>
                                </span>
                            </div>
                        </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}