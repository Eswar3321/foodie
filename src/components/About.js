import {Component} from 'react'
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
        <p>The is explainging about React</p>
        <User />
        <Userclass name={"Eswar from function component"} contact={"123456"} />
      </div>
    )
  }
}

export default About
