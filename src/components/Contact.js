import React from 'react'

const Contact = () => {
  return (
    <div className='p-8'>
      <h1 className='text-3xl'>Contact here</h1>
      <input type="text" placeholder='name' className="border border-black p-2 m-2 rounded-lg"/>
      <input type="text" placeholder='message' className="border border-black p-2 m-2 rounded-lg"/>
      <button className="border border-black p-2 m2 bg-gray-200 rounded-lg">Submit</button>
    </div>
  )
}

export default Contact
