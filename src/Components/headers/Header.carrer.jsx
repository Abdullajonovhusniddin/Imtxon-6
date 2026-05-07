import Navbar from "../navbar/Navbar";
import masking from "/src/assets/svg/masking.svg";

export default function Header() {
    return (
        <header>
            <Navbar />
            <div className="containers text-center p-24">
                <b className="pre-header">CAREER AT FINSWEET</b>
                <h1 className="main-header">We hired people who are <br />
Always Passionate about <br />
 what they do</h1>
        <p className="paragraph">Through True Rich Attended does no end it his mother since real had half <br />
         every him case in packages enquire we up ecstatic unsatiable saw .</p>
                <img className="m-[64px_auto_80px]" src={masking} alt="masking img" />
                <p className="text-[18px] leading-7 font-medium text-primaryColor">See Our open positions </p>
            </div>
        </header>
    )
}