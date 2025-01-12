import {useState} from 'react'
import {BRAND_LOGO} from "../utilities/constants"


const Header = () => {
  const [btnText, setbtnText] = useState('Log In');
  return (
    <div className="header-container">
      <img alt="brand-logo" src={BRAND_LOGO} />
      <div className="links-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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