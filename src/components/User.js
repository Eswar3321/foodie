import { useEffect, useState } from "react"
const User = ({name}) => {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(1);

  useEffect(() => {
    // const fetchData = async() => {
    //   const response = await fetch("https://api.github.com/users/Eswar3321");
    //   const data = await response.json();
    //   console.log(data);
    // }
    // fetchData();
    const interval = setInterval(() => {console.log("Calling from useEfeect fn")},1000);
    return(() => {
      clearInterval(interval);
    }); 
  },[]);
  
  return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <h1>Count1:{count1}</h1>
        <h2>{name}</h2>
        <h3>Contact: 123456789</h3>
      </div>
  )
}

export default User