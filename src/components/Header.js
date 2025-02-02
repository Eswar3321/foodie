import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BRAND_LOGO} from "../utilities/constants"
import useOnlineStatus from '../utilities/useOnlineStatus'


const Header = () => {
  const [btnText, setbtnText] = useState('Log In');

  useEffect(() => {"I was called"});

  return (
    <div className="header-container">
      <img alt="brand-logo" src={BRAND_LOGO} />
      <div className="links-container">
        <ul>
          <li>Online Status:{useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={(() => btnText === 'Log In' ? setbtnText("Log Out" ): setbtnText("Log In"))}>{btnText}
            </button>
          </li>
          <li><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header