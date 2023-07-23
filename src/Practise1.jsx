import React from 'react'
import {Avatar}  from './Avatar'

const Practise1 = ({person,size,isSepia,thickBorder}) => {
  return (
    <div className='card'>
        <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
thickBorder={thickBorder}
        />

       
    </div>
  )
}

export default Practise1