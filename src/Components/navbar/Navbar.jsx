import { NavLink } from "react-router-dom";
import { MainLogo, Arrow } from "../logos/Logos";

export default function Navbar() {
  const activeClass = "text-secondaryColor border-t-[3px] border-activeColor py-6";
  const idleClass = "text-[#c1c1c1] border-t-[3px] border-transparent py-6 hover:text-white transition-all";

  return (
    <nav className="bg-primaryColor">
      <div className="containers flex items-center justify-between">
        <MainLogo className="cursor-pointer" />
        
        <ul className="flex items-center gap-8 h-full">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium leading-6 cursor-pointer ${isActive ? activeClass : idleClass}`
            }
          >
            Company
          </NavLink>

          <NavLink 
            to="/carrer_page" 
            className={({ isActive }) => 
              `font-medium leading-6 cursor-pointer ${isActive ? activeClass : idleClass}`
            }
          >
            Carrer
          </NavLink>

          <NavLink 
            to="/blog_page" 
            className={({ isActive }) => 
              `font-medium leading-6 cursor-pointer ${isActive ? activeClass : idleClass}`
            }
          >
            Blog
          </NavLink>

          <NavLink 
            to="/contact_page" 
            className={({ isActive }) => 
              `font-medium leading-6 cursor-pointer ${isActive ? activeClass : idleClass}`
            }
          >
            Contact us
          </NavLink>

          <li className="flex items-center gap-2 font-medium leading-6 cursor-pointer text-pureColor">
            Clone project <Arrow />
          </li>
        </ul>
      </div>
    </nav>
  );
}