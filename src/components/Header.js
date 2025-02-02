import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BRAND_LOGO} from "../utilities/constants"
import useOnlineStatus from '../utilities/useOnlineStatus'


const Header = () => {
  const [btnText, setbtnText] = useState('Log In');

  useEffect(() => {"I was called"});

  return (
    <div className="flex justify-between items-center bg-amber-100 shadow-2xl">
      <img alt="brand-logo" src={BRAND_LOGO} className="w-20" />
      <div >
        <ul className="flex mr-4">
          <li className="mr-2">Online Status:{useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li className="mr-2"><Link to="/">Home</Link></li>
          <li className="mr-2"><Link to="/about">About</Link></li>
          <li className="mr-2"><Link to="/contact">Contact Us</Link></li>
          <li className="mr-2"><Link to="/instamart">Instamart</Link></li>
          <li className="mr-2">
            <button className="border-1 rounded-md px-4 bg-amber-50" onClick={(() => btnText === 'Log In' ? setbtnText("Log Out" ): setbtnText("Log In"))}>{btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header