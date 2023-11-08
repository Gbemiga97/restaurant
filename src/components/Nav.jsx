import { Link } from "react-scroll"
import { data } from "../utils"


const Nav = ({setShowNav}) => {
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6" >
        {
          data.navData.map(({href, name}, i) => (
            <li key={i}>
              <Link
              to={href}
              spy={true}
              onClick={() => setShowNav(false)}
              className="text-xl capitalize font-primary italic hover:text-dark 
              transition-al duration-300 cursor-pointer"
              >
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav