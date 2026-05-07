import { Link } from 'react-router-dom';
import {Arrow} from '../logos/Footer.logos';
import { useContext } from 'react';
import {UserContext} from "../../context/UserContext";

export default function Carrers() {
    const {setJob} = useContext(UserContext); 

    const proffesions = [
        {
            job:'Full Stack Developer',
            time:'Bengaluru · Full Time',
            salary:'$10K - $18K · No equity',
        },
        
        {
            job:'Testing Engineer',
            time:'Remote · Full Time ',
            salary:'$08K - $10K · No equity',
        },

        {
            job:'Hr Manager',
            time:'Mumbai . Fultime',
            salary:'$08K - $10K · 4 to 5 Yrs Exp',
        },

        {
            job:'Product Designer',
            time:'Mumbai . Fultime',
            salary:'$08K - $10K · 4 to 5 Yrs Exp',
        },

        {
            job:'Wordpress Developer',
            time:'Mumbai . Fultime',
            salary:'$08K - $10K · 4 to 5 Yrs Exp',
        },

        {
            job:'Jr. QA Tester',
            time:'California, USA . Full Time',
            salary:'$14K - $23K · No equity',
        },

        {
            job:'Sr. UX Designer',
            time:'California, USA . Full Time',
            salary:'$14K - $23K · No equity',
        },

        {
            job:'Social Media Manager',
            time:'Kolkata, India .  Fulltime',
            salary:'$5K - $6K ·  Fresher  ',
        },

         {
            job:'Golang Developer',
            time:'Mumbai . Fultime',
            salary:'$08K - $10K · 4 to 5 Yrs Exp',
        },
    ]
    
    function setData(e) {
        setJob(e.target.id);
        localStorage.setItem("proffesion" , e.target.id);
    }

    
    return (
        <section>
            <div className="containers">
                <div className="bg-expertiseColor p-19.5 grid grid-cols-3 gap-8">
                    {proffesions.map(
                        (stuff , index) => 
                            <div key={index} className="bg-secondaryColor pt-12 pb-7.5 pl-12">
                                <h3 className="font-semibold leading-7 text-primaryColor"> {stuff.job}</h3>
                                <p className="font-normal leading-6 text-paragColor mt-2.5">{stuff.time}</p>
                                <p className='font-normal leading-6 text-paragColor'>{stuff.salary}</p>
                               
                            <div className="mt-13 flex gap-3 items-center cursor-pointer">
                               <Link id={stuff.job} onClick={setData} to="/carrer_inner_page" className="font-medium text-[18px] leading-6 text-carrerColor">
                                   Apply Now   
                               </Link>
                                <Arrow />
                            </div>
                            </div>
                    )}
                </div>
            </div>
        </section>
    )
}