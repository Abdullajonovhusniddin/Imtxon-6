import HomeMadeShape from "../logos/Home.made.shapes";
import Navbar from "../navbar/Navbar";
import { Facebook , Twitter, Instagram, LinkedIn } from "../logos/Contact.logos";
import {RectangleShape , MiniIcon} from "../logos/CTA.logos";
import {Shape} from "../logos/Footer.logos";


export default function Header() {
    const logos = [<Facebook /> , <Twitter /> , <Instagram /> , <LinkedIn />];
    return (
        <header>
            <Navbar />
            <div className="containers flex justify-between py-24 gap-10">
            
            {/* right */}
                <div>
                    <HomeMadeShape className="bg-pureColor h-6 w-6" />
                    <b className="pre-header mt-6 block">CONTACT US</b>
                    <h1 className="main-header">
                        Have a Question ? <br />
                        Let’s Get in Touch with us 👋
                    </h1>
                    <p className="paragraph">Fill up the Form  and ou team will get back to within 24 hrs</p>

                    <form className="flex flex-col gap-6 mt-16 mb-13.5">
                        <div>
                           <label className="block font-medium text-[14px] leading-5 text-primaryColor" htmlFor="name">Name</label>
                           <input className="outline-0 border-b border-paragColor pb-2 font-normal leading-6 w-[38%]" type="text" id="name" placeholder="Paresh Srichandan" />
                        </div>

                        <div>
                           <label className="block font-medium text-[14px] leading-5 text-primaryColor" htmlFor="email">E-mail</label>
                           <input className="outline-0 border-b border-paragColor pb-2 font-normal leading-6 w-[38%]" type="email" id="email" placeholder="Paresh@pixeto.com" />
                        </div>

                        <div>
                           <label className="block font-medium text-[14px] leading-5 text-primaryColor" htmlFor="subject">Subject</label>
                           <input className="outline-0 border-b border-paragColor pb-2 font-normal leading-6 w-[38%]" id="subject" type="text" placeholder="For web design work Enquire " />
                        </div>

                        <div>
                            <label className="block font-medium text-[14px] leading-5 text-primaryColor" htmlFor="message">Messege</label>
                            <textarea className="outline-0 border-b border-paragColor py-2 resize-none font-normal leading-6 w-[38%]" name="" id="message" placeholder="Type your Messege"></textarea>
                        </div>
                    </form>

                    <button className="bg-blockColors flex items-center gap-3.25 py-5 px-8 relative">
                      <p className=" leading-6 font-medium text-secondaryColor">Send Messege</p>
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7071 8.07112C21.0976 7.6806 21.0976 7.04743 20.7071 6.65691L14.3431 0.292946C13.9526 -0.0975785 13.3195 -0.0975785 12.9289 0.292946C12.5384 0.68347 12.5384 1.31664 12.9289 1.70716L18.5858 7.36401L12.9289 13.0209C12.5384 13.4114 12.5384 14.0446 12.9289 14.4351C13.3195 14.8256 13.9526 14.8256 14.3431 14.4351L20.7071 8.07112ZM0 8.36401L20 8.36401V6.36401L0 6.36401L0 8.36401Z" fill="white"/>
                        </svg>

                        <Shape className='absolute left-0 top-0' />
                    </button>
                </div>

                    {/* left */}
                <div className="bg-boxColor pt-20.75 pl-24 pb-32 pr-37 h-full relative mt-4">
                    {/* logo1 */}
                    <RectangleShape className="absolute -left-6 bottom-0" />
                    <MiniIcon className='absolute -top-5 -z-10 right-0' />

                  <div className="flex flex-col gap-6">
                    <div>
                        <b className="font-medium text-[14px] leading-5 text-secondaryColor/60">Location</b>
                        <hr className="border-borderColor border my-3" />
                        <h1 className="leading-7 text-[18px] font-medium text-secondaryColor">
                            DLF Cybercity, Bhubaneswar, 
                            India, &52050
                        </h1>
                    </div>

                     <div>
                        <b className="font-medium text-[14px] leading-5 text-secondaryColor/60">Working Hour</b>
                        <hr className="border-borderColor border my-3" />
                        <h1 className="leading-7 text-[18px] font-medium text-secondaryColor">
                            Monday To Friday 
                            9:00 AM to 8:00 PM 
                        </h1>
                        <b className="font-medium text-[14px] leading-5 text-secondaryColor/60">Our Support Team is available 24Hrs</b>
                    </div>

                    <div>
                        <b className="font-medium text-[14px] leading-5 text-secondaryColor/60">Contact Us</b>
                        <hr className="border-borderColor border my-3" />
                        <h1 className="leading-7 text-[18px] font-medium text-secondaryColor">
                            020 7993 2905
                        </h1>
                        <b className="font-medium text-[14px] leading-5 text-secondaryColor/60">Hello@ether.com</b>
                    </div>
                </div>

                <div className="flex gap-6 mt-13.5">
                     {logos.map(
                        logo => logo
                    )}     
                </div>
                   
                </div>
            </div>
        </header>
    )
}