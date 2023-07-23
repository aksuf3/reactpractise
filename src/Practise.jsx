import React from 'react'
import{getImageUrl} from './utils'
import myName from './img/img-20220217-112305-2.jpg'
import myFace from './img/Abu Sufian.jpeg'

function Avatar({imageSrc,altText,size}) {
    return (
        <img src={imageSrc} className='avatar' alt={altText} width={size} height={size} />
      );
  }
export default function Profile() {
    return (
    <>
    <Avatar
    size={100}
    imageSrc={myName}
    altText="Abu "
    />
    
      <Avatar
    size={100}
    imageSrc={myFace}
    altText="Abu "
    />
    
    </>
    );
  }


