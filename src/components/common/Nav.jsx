import {headerLogo} from "../../assets/images/index.js";
import {hamburger} from "../../assets/icons/index.js";
import {navLinks} from "../../constants/index.js";
import {Link} from "react-router-dom";

const Nav = () => {
   return (
       <header className="padding-x py-8 absolute z-10 w-full">
          <nav className="flex justify-between items-center max-container">
             <a href="/">
                <img
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                    className="hover:scale-110 hover:transition hover:delay-75"
                />
             </a>
             <ul className='flex-1 flex justify-center items-center
             gap-6 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                       <Link
                           to={item.href}
                           className="font-montserrat leading-normal hover:underline hover:text-orange-600
                           text-lg text-slate-gray"
                       >
                          {item.label}
                       </Link>
                    </li>
                ))}
             </ul>
             <div className="hidden max-lg:block">
                <img
                    src={hamburger}
                    alt="hamburger"
                    height={25}
                    width={25}
                />
             </div>
          </nav>
       </header>
   );
};

export default Nav;