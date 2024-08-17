import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className = "padding-x py-8 absolute z-10 w-full">
        <nav className = "flex justify-between items-center max-container"> {/*IDK*/}
            {/*Nike Symbol*/}
            <a href = '/'>
                <img 
                    src = {headerLogo} 
                    alt = "symbol" 
                    width={129} 
                    height ={29}
                    className =  "m-0 w-[129px] h-[29px]"
                />
            </a>
            {/*Navigation elements - Home, About Us, Products, Contact Us*/}
            <ul className = "flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key = {item.label}>
                        <a href = {item.href} className = "font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            {/*Sign in Link*/}
            <div className = "flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                <a href = '/'>Sign in</a>
                <span> / </span>
                <a href = '/'>Explore Now</a>
            </div>
            <div className = "max-lg:block hidden">
                <a href = '/'>
                    <img 
                        src = {hamburger} 
                        alt = "symbol" 
                        width={25} 
                        height ={25} 
                    />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Nav