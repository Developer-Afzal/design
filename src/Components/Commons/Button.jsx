import React from 'react'

const Button = (props) => {
  const {data, action} = props;
  return (
  <div>
    <button className='default-btn'>{data}</button>
  </div>
  )
}

export default Button