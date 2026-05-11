import HomeMadeShape from '../logos/Home.made.shapes';
import {Arrow} from '../logos/Footer.logos';
import personal1 from "../../assets/img/personal1.png";
import personal2 from "../../assets/img/personal2.png";

export default function TemplateSection() {
    const images = [ personal1 , personal2 ];
    return (
        <section className="bg-templateColor py-24">
            <div className="containers">
                <HomeMadeShape className="h-4 w-4 bg-boxColor" />
                <h2 className="main-header text-primaryColor">
                    Blog posts from Javena
                </h2>

                <div className='flex justify-between'>
                    {
                        images.map(
                            img => 
                    <div className="flex">
                        <img className='h-auto' src={img} alt="" />
                        <div className="bg-secondaryColor p-8">
                            <b className='font-medium text-[14px] leading-5 text-paragColor'>Jan 19, 2021</b>
                            <h4 className='font-semibold leading-8 text-2xl text-primaryColor m-[8px_0_24px]'>
                                Today’s best design <br /> trends for digital <br /> products
                            </h4>
                        <div className="m-[24px_0_40px] flex gap-3 items-center">
                            <b className="font-medium text-[18px] leading-6 text-carrerColor cursor-pointer">Read More</b>   
                            <Arrow />  
                        </div>

                        </div>
                    </div>
                        )
                    }
                   
                </div>
            </div>
        </section>
    )
}