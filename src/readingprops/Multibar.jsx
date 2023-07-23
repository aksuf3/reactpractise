function Button({onCick,children}){
    return(
        <button onClick={onCick}>
{children}
        </button>
    )
}

function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName}'`)
    }
return(
    <Button onClick={handlePlayClick}>
Play "{movieName}"
    </Button>
)
}

function UploadButton(){
    return(
        <Button onClick={()=>alert('Uploading')}>
            Upload Image
        </Button>
    )
}

export default function Toolbar(){
    return(
        <div>
            <PlayButton movieName="Kiki's Delivery Serice"/>
            <UploadButton/>
        </div>
    )
}