export default function Button(){
    function handleClick(){
        alert("You clicked me");
    }
return(
  <>
  <button onClick={handleClick}>
Click me
  </button>
  <button onMouseEnter={handleClick}>
Click me
  </button>

<button onClick={()=>{
    alert('You clicked me');
}} >Button</button>
  </>
)


}