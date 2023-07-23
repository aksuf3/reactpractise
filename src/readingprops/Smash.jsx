function Button({onSmash,children}){
    return(
     <button onClick={onSmash}>
   {children}
     </button>
    )
}

export default function Smash(){
    return(
        <>
        <Button onSmash={()=>alert('Playing')}>
Play Movie
        </Button>
        
        <Button onSmash={()=>alert('Playing')}>
Play Movie
        </Button>
        
        </>
    )
}