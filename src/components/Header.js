import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BRAND_LOGO} from "../utilities/constants"


const Header = () => {
  const [btnText, setbtnText] = useState('Log In');

  useEffect(() => {"I was called"});

  return (
    <div className="header-container">
      <img alt="brand-logo" src={BRAND_LOGO} />
      <div className="links-container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={(() => btnText === 'Log In' ? setbtnText("Log Out" ): setbtnText("Log In"))}>{btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header