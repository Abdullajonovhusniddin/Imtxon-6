import {Delivery , Quality , Support} from "../logos/Expertise.logos";
import HomeMadeShape from "../logos/Home.made.shapes";
import { LongShape } from "../logos/Logos";

export default function Expertise() {
    const cards = [ 
    {
        title:'On Time Delivery',
        icon: <Delivery />
    }, 
    
    {
        title:'Best Quality',
        icon:<Quality />
    } , 
    
    {
        title:'Support Assist',
        icon:<Support />
    }];
    
    return (
        <section className="bg-expertiseColor py-24">
            <div className="containers flex justify-between items-center">
                <div>
                    <b className="pre-header">Our expertise</b>
                    <h3 className="main-header">We want to get local <br /> identification in every <br /> corner of the world in this <br /> era of global citizenship</h3>
                    <p className="font-normal leading-6 text-paragColor">Through True Rich Attended does no end it his mother since real had half <br /> every him case in packages enquire we up ecstatic unsatiable saw his giving <br /> Remain expense you position concluded. </p>
                </div>

                <div className="flex flex-col gap-3 relative">
                    <HomeMadeShape className="w-4 h-4 bg-blockColors absolute -top-4"/>
                    {cards.map(
                        card => 
                    <div className="bg-secondaryColor p-[32px_117px_32px_32px] flex gap-4">
                        {card.icon}
                        <div>
                            <h4 className="font-semibold leading-7 text-boldColor">{card.title}</h4>
                            <p className="paragraph text-paragColor">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                        </div>
                    </div>
                    )}
                    <LongShape className='absolute bottom-0 w-full' />
                </div>
            </div>
        </section>
    )
}