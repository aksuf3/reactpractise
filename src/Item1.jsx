import React from "react";

function Item1({name,isPacked}){
let itemContent=name;
if(isPacked){
    itemContent=(
        <del>
            {name+"✔"}
        </del>
    )
}
return(
    <li className="item">
        {itemContent}
    </li>
)
}

export default function PackingLit1(){
    return(
        <section>
<ul>
<Item1
isPacked={true}
name="Space Suit"
/>
<Item1
isPacked={false}
name="Hello my brother"
/>


</ul>


        </section>
    )
}