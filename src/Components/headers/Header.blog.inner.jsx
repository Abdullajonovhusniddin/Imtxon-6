import Navbar from "../navbar/Navbar";
import logo from "/src/assets/svg/logo.svg";
import HomeMadeShape from "../logos/Home.made.shapes";
import { Shapes } from "../logos/Logos";

export default function BlogInner() {
    return (
        <header>
            <Navbar />
            <div className="containers py-24">
                <div className="relative left-0 top-0 pt-6">
                    <HomeMadeShape className='h-6 w-6 bg-pureColor absolute left-0 top-0'/>
                    <Shapes className="absolute right-0 top-0" />
                    <h1 className="main-header text-primaryColor">
                        Breaking the code How did we <br /> build our Figma plugin 
                    </h1>
                    <p className="paragraph text-paragColor">
                        It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout. The Maker is a decentralized. We aim to attain the <br /> greatest satisfaction for our clients
                    </p>

                     <div className="flex items-center gap-3 mt-8">
                        <img src={logo} alt="logo icon" />
                        <p className="font-normal leading-6 text-primaryColor">Andrew Jonson</p>
                        <div className="border border-solid border-paragColor h-5">

                        </div>
                        <p className="font-normal leading-6 text-paragColor">Posted on 27th January 2021</p>
                    </div>

                </div>    
            </div>
        </header>
    )
}