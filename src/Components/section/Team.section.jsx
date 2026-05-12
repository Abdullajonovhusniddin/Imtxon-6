import { useContext} from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import { Twitter, Instagram, LinkedIn } from "../logos/Media.logos";

export default function Team() {
    const teamMembers = [
        { src: 'Team1.png', name: 'Javena Melo' },
        { src: 'Team2.png', name: 'Ariana Lee' },
        { src: 'Team3.png', name: 'Noah Bennett' },
        { src: 'Team4.png', name: 'Mia Carter' },
        { src: 'Team5.png', name: 'Ethan Brooks' },
        { src: 'Team6.png', name: 'Luna Hart' },
        { src: 'Team7.png', name: 'Leo Martin' },
        { src: 'Team8.png', name: 'Sophia Reid' },
    ];
    const { setImg } = useContext(UserContext);

    function sendImg(src) {
        setImg(src);
        localStorage.setItem("img_url" , src);
    }

    return (
        <section>
            <div className="containers">
                <b className="pre-header text-boldColor">MEET OUR TEAM</b>
                
                <h3 className="main-header text-primaryColor">
                    Teamwork is the only <br />
                    way we work 
                </h3>

                <p className="paragraph text-primaryColor">
                    Through True Rich Attended does no end it his mother since <br /> 
                    real had half every him case in packages enquire we up <br /> 
                    ecstatic unsatiable.
                </p>

                <div className="grid grid-cols-4 gap-6 mt-16">
                    {teamMembers.map((member, index) => (
                        <Link
                            key={index}
                            to="/template_page"
                            onClick={() => sendImg("/" + member.src)}
                            className="group relative overflow-hidden rounded-3xl"
                        >
                            <img
                                src={"/" + member.src}
                                alt={member.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gray-600/80 opacity-0 transition duration-300 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-center px-4">
                                <p className="font-semibold text-lg">{member.name}</p>
                                <div className="mt-4 flex items-center gap-4">
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-secondaryColor">
                                        <Twitter />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-secondaryColor">
                                        <Instagram />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-secondaryColor">
                                        <LinkedIn />
                                    </a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div> 
            </div>
        </section>
    )
}