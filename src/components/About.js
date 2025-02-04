import {Component} from 'react'
import UserContext from '../utilities/UserContext'
import Userclass from './Userclass'
import User from './User'

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent DidMount");
  }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>Hello About</h1>
        <UserContext.Consumer>
          {(({loggedInUser})=> (<h2 className="font-bold">{loggedInUser}</h2>))}
        </UserContext.Consumer>
        <p>The is about React</p>
        <User />
        <Userclass name={"Eswar from function component"} contact={"123456"} />
      </div>
    )
  }
}

export default About
