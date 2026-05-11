import Navbar from "../navbar/Navbar";
import { useContext } from "react";
import {UserContext} from "../../context/UserContext";
import { Facebook, Twitter , Instagram } from "../logos/Media.logos";

export default function header() {
    const {img} = useContext(UserContext);
    const icons = [<Facebook />, <Twitter />, <Instagram />];

    return (
        <header>
            <Navbar />
            <div className="containers flex flex-col items-center gap-8 py-24">
                <div>
                    <img src={img || localStorage.getItem("img_url")} alt="" className="m-auto rounded-full" />
                    <h1 className="title text-primaryColor mb-13 mt-12 text-center">Javena Melo</h1>
                    <p className="paragraph text-primaryColor text-center">Through True Rich Attended does no end it his mother since <br /> real had half every him case in packages enquire we up <br /> ecstatic unsatiable.</p>
                </div>
                <div className="flex gap-6.5">
                    {icons.map(
                        icon => icon
                    )}
                </div>
            </div>
        </header>
    )
}