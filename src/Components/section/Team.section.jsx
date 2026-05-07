import { useContext} from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../context/UserContext";

export default function Team() {
    const image = ['Team1.png' , 'Team2.png' , 'Team3.png' , 'Team4.png' , 'Team5.png' , 'Team6.png' , 'Team7.png' , 'Team8.png'];
    const { img , setImg} = useContext(UserContext);

    function sendImg(e) {
        setImg(e.target.src);
        localStorage.setItem("img_url" , e.target.src);
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

                <div className="grid grid-cols-4 mt-16 relative">
                    {image.map(
                        (img , index) => 
                            <Link to="./template_page">
                                <img key={index} onClick={sendImg} className="cursor-pointer" src= { "/" + img} alt={img} />
                            </Link>
                    )}
                </div> 
            </div>
        </section>
    )
}