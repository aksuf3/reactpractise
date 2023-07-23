function AlertButton({message,children}){
    return(
        <button onClick={()=>alert(message)}>
{children}

        </button>
    )
}

export default function Toolbar(){
    return(
        <>
        
        <AlertButton message="Playing the kids">
Play Movie
        </AlertButton>
             
        <AlertButton message="message is uploading">
Upload Image
        </AlertButton>
        </>
    )
}