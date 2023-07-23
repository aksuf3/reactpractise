function Item({ name, isPacked }) {
 return(
  <li className="item">

{
isPacked?(
  <del>
  {name + ' ✔'}
</del>
):(
  name
)
}
  </li>
 )
  }
  export default function PackingList(){
    return(
        <section>
            <h1>Sally Rides Packing List</h1>
            <ul>
 <Item 
 isPacked={true}
 name="Space Suit"
 />
  <Item 
 isPacked={true}
 name="Space Car"
 />
  <Item 
 isPacked={false}
 name="Sprertertert"
 />
            </ul>
        </section>
    )
  }