function Recipe({drinkers}){
    return(
        <ol>
<li>Boil{drinkers}</li>
<li>Add{drinkers} spoons of tea and{0.5*drinkers}</li>
<li>Add {0.5 * drinkers} cups of milk to boil and sugar to tas</li>
        </ol>
    )
}
export default function World(){
    return(
<section>
<h1>Spiced Chai Recipe</h1>
<h2>For two</h2>
<Recipe drinkers={7}/>
<h2>For a gathering</h2>
<Recipe drinkers={2}/>
</section>
    )
}
