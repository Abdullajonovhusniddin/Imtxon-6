import { Link } from "react-router-dom";
import { MainLogo , Arrow} from "../logos/Logos";

export default function Navbar() {
    return (
        <nav className="bg-primaryColor">
             <div className="containers flex items-center justify-between">
                <MainLogo className="cursor-pointer" />
                    <ul className="flex  items-center gap-8">
                        <Link to="/" className="text-secondaryColor font-medium leading-6 cursor-pointer py-6.25 border-solid border-t-[3px] border-activeColor">
                            Company
                        </Link>

                        <Link to="/carrer_page" className="font-medium leading-6 cursor-pointer text-[#c1c1c1] mt-1">
                            Carrer
                        </Link>

                        <Link to="/blog_page" className="font-medium leading-6 cursor-pointer text-[#c1c1c1] mt-1">
                            Blog
                        </Link>
                        
                        <Link to="/contact_page" className="font-medium leading-6 cursor-pointer text-[#c1c1c1] mt-1">Contact us</Link>
                        
                        <li className=" flex items-center gap-2 font-medium leading-6 cursor-pointer text-pureColor mt-1">Clone project <Arrow /></li>
                    </ul>    
             </div>
            </nav>
    )
}