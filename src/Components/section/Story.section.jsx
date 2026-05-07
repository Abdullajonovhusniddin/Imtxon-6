import HomeMadeShape from "../logos/Home.made.shapes";
import { MiniRecShape } from "../logos/Logos";
import LogoBar from "./Logo.bar";

const storyData = [
    {
        id: 1,
        exp_year: "15+",
        title: "Years of Experience"
    },
    {
        id: 2,
        exp_year: "100+",
        title: "Successfully Projects"
    },
    {
        id: 3,
        exp_year: "20+",
        title: "Professional Awards"
    },
    {
        id: 4,
        exp_year: "50+",
        title: "Happy Clients"
    }
];

export default function Story() {
    return (
        <section className="my-24">
            <div className="containers">
                <div className="flex justify-between">
                    <div className="text-primaryColor">
                        <HomeMadeShape className='bg-boxColor h-4 w-4' />
                        <b className="font-semibold leading-7 my-4">Our Story 👇 </b>
                        <h2 className="title">From Startups to Titans of <br /> Industry</h2>
                        <p className="paragraph mt-6">
                            Through True Rich Attended does no end it his mother since <br /> 
                            favourable real had half every him case in packages enquire we up <br /> 
                            ecstatic unsatiable saw his giving Remain expense of gay produce <br /> 
                            excited perceived do an a china mean its so ye when in explained <br /> 
                            Hearts am next over match mr partiality not shoud latter thus as out <br /> 
                            no passed forming middleton exercise up
                        </p>
                    </div>
                    
                    <div className="p-[62px_214px_80px_110px] bg-experienceColor grid grid-cols-2 gap-x-16 gap-y-7.5">
                        {storyData.map(feature => (
                            <div key={feature.id} className="text-primaryColor">
                                <h3 className="font-semibold text-4xl leading-13.5">{feature.exp_year}</h3>
                                <MiniRecShape className="m-[8px_0_2px]" />
                                <b className="font-semibold leading-7">{feature.title}</b>
                            </div>
                        ))}
                    </div>
                </div>
                <LogoBar />
            </div>
        </section>
    );
}