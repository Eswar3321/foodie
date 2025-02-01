import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
    this.state = {
      count: 0,
      count1: 1
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {console.log("hello")}, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log("Child render");
    const {name, contact} = this.props;
    return(
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>{ 
          this.setState({count: this.state.count+1 });
        }}>Increase</button>
        <h2>{name}</h2>
        <h3>Contact: {contact}</h3>
      </div>
    )
  }
}

export default Userclass
