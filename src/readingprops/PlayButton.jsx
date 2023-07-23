function Button({onClick,children}){
    return(

<button onClick={onClick}>
{children}
</button>
    )
}

function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`plaing ${movieName}`)
    }
    return(
        <Button onClick={handlePlayClick}>
Play "{movieName}"
        </Button>
    )
}



function UploadButton(){
    return(
<Button onClick={()=>alert(`Uploading`)}>

</Button>

    )
}

export default function Toolba(){
    return(
        <div>
            <PlayButton movieName="Kiki's deliveri Service"/>
            <UploadButton/>
        </div>
    )
}