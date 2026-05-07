// Logos
import HomeMadeShape from "../logos/Home.made.shapes";
import { RecShapes, Shapes } from "../logos/Logos";

// Components
import Navbar from "../navbar/Navbar";

// images
import Worker1 from "/src/assets/img/workers1.png";
import Worker2 from "/src/assets/img/workers2.png";
import Worker3 from "/src/assets/img/workers3.png";

export default function Header() {    
    const images = [ Worker1 , Worker2 , Worker3 ];

    return (
        <header>
            {/* navbar */}
            <Navbar />

            {/* header */}
        <div className="containers mt-24">
            <div className="flex justify-between">
                <div className="flex gap-6 flex-col">
                    <HomeMadeShape className="h-7 w-7 bg-pureColor" />
                    <b className="pre-header">Company</b>
                </div>
                <Shapes />
            </div>
            <h1 className="main-header">Award-winning Company <br /> seen and used by millions <br /> around the world.</h1>
            <p className="paragraph">It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout. The Maker is a decentralized. </p>
           
           <div className="grid grid-cols-3 gap-3 mt-10 relative">
                {images.map(
                    img => <img className="h-full w-full" src={img} alt={img} />
                )}

             <RecShapes className='absolute right-0 -top-6 -z-10' />
           </div>
        </div>
        </header>
    )
}