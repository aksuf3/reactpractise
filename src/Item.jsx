import React from 'react';
function Item({name,isDone}){
    return(
        <li className='item'>
{isDone?<span className='checkmark'>✔</span>:null}
<span className={isDone ? 'done' : ''}>{name}</span>
        </li>
    )
}

export default Item;