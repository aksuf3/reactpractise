import React from "react";
import Item from "./Item";

export default function TodoList(){
    return(

<section>
<h1>My TodoList</h1>
<ul>
<Item isDone={true} name="Complete assignment" />
        <Item isDone={true} name="Buy groceries" />
        <Item isDone={false} name="Go for a walk" />


</ul>

</section>



    )
}