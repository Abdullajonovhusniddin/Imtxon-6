import { Link } from "react-router-dom";
import {Shape , MiniRectangularShape , Arrow , MainLogo} from "../logos/Footer.logos";
import { Facebook, Instagram, LinkedIn, Twitter } from "../logos/Media.logos";

export default function Footer () {
    const list = [
        {title:'Company' , path:"/"},
        {title:'Carrer' , path:"/carrer_page"},
        {title:'Blog' , path:'/blog_page'}, 
        {title:"Contact us" , path:'/contact_page'}
    ];

    const list2 = ['Technical support' , "Testing" , 'Development' , 'AWS/Azure ' , 'Consulting' , 'Information Technology'];
    const list3 = ['About Us' , 'Testimonial' , 'Terms of use'];
    const mediaIcons = [<Facebook /> , <Twitter /> , <Instagram /> , <LinkedIn />];
    return (
        <footer className="text-primaryColor">
            <div className="containers pt-24 pb-16">
                <div>
                    <Shape />
                </div>
            
        <div className="flex justify-between items-center">    
            <div>
                <h6 className=" main-header">
                    Let's make <br />
                    something special
                </h6>

                <b className="font-semibold leading-6 text-2xl">Let's talk! 🤙 </b>
                
                <span className="leading-1 block m-[28px_0_14px]">
                    <p className="font-medium text-[18px] leading-7">020 7993 2905</p>
                    <p className="font-medium text-[18px] leading-7">hi@finsweet.com</p>
                </span>

                <div className="border-borderColor border-solid border max-w-67 mb-4"></div>

                <p className="font-medium text-[14px] leading-5-">DLF Cybercity, Bhubaneswar, <br /> 
                India, &52050</p>
            </div>
            

        <div>
            <div className="flex gap-15.25 pr-23.25">
                <ul className="flex flex-col gap-5.5">
                    {list.map(
                        ( item , index )=> <Link to={item.path} key={index} className="font-semibold leading-7">{item.title}</Link>
                    )}
                </ul>

                <ul className="flex flex-col gap-3">
                    <li className="font-semibold leading-7">Service</li>
                    {list2.map(
                        (list , index) => <li key={index} className="leading-7">{list}</li>
                    )}
                </ul>

                <ul className="flex flex-col gap-3">
                    <li className="font-semibold leading-7">Resourses</li>
                    {list3.map(
                        (list , index) => <li key={index} className="leading-7">{list}</li>
                    )}
                    <Link to="/privacy_page">Privacy Policy</Link>
                    <li className="leading-7">Blog</li>
                </ul>
            </div>

        <div className="flex items-center justify-end gap-2 mt-13">
            <MiniRectangularShape />
            <p>Contact Us</p>
            <Arrow />
        </div>

            </div>
        </div>
            </div>

        <nav className="bg-footerColor py-7">
            <div className="containers flex justify-between items-center">
                    <div className="flex gap-10.5 items-center">
                        <MainLogo />
                    <p className="font-medium leading-6 text-boldColor">©2021 Finsweet</p>
                    </div>

                    <div className="flex gap-6 items-center">
                        {mediaIcons.map(
                            (icon) => icon
                        )}
                    </div>
            </div>
        </nav>
        </footer>
    )
}