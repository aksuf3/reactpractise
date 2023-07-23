
import SonComponent from "./Son"


function FatherComponent(){
    const person1={
        name:'John doe',
        age:'30'
    }

    const person2={
        name:'Jane Smith',
        age:56
    }

return(
    <>
    <h1>Parent Componnt</h1>
    
    <SonComponent></SonComponent>
    </>
)

}

export default FatherComponent