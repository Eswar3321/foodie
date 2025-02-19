import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {BRAND_LOGO} from "../utilities/constants"
import useOnlineStatus from '../utilities/useOnlineStatus'
import UserContext from '../utilities/UserContext'
import { useSelector } from 'react-redux'


const Header = () => {
  const [btnText, setbtnText] = useState('Log In');

  useEffect(() => {"I was called"});

  const {loggedInUser} = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);  

  return (
    <div className="flex flex-col items-start p-4 shadow-2xl lg:flex-row lg:items-center lg:justify-between">
      <div className="mb-4 lg:mb-0 flex items-center">
        <img alt="brand-logo" src={BRAND_LOGO} className="w-20" />
        <span className="text-2xl">Foodie</span>
      </div>
      <div >
        <ul className="flex flex-col gap-4 mr-4 lg:flex-row">
          <li className="mr-2"><Link to="/">Home</Link></li>
          <li className="mr-2"><Link to="/about">About</Link></li>
          <li className="mr-2"><Link to="/contact">Contact Us</Link></li>
          <li className="mr-2"><Link to="/instamart">Instamart</Link></li>
          <li className="mr-2">{loggedInUser}</li>
          <li className="mr-2">Online Status:{useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li className="mr-2">
            <button className="border-1 rounded-md px-4 bg-amber-50 cursor-pointer" onClick={(() => btnText === 'Log In' ? setbtnText("Log Out" ): setbtnText("Log In"))}>{btnText}
            </button>
          </li>
          <li className="font-bold text-xl"><Link to="/cart"><button>Cart-({cart.length})</button></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
