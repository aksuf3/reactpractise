export default function  Toolbar2(){
    return(
        <Toolbar
        onPlayMovie={()=>alert('Playing')}
        onUploadImage={()=>alert('Uploading')}
        />
    )
}
function Toolbar({onPlayMovie,onUploadImage}){
    return(
        <>
        <Button onClick={onPlayMovie}>
            Play Movie
        </Button>
        <Button onClick={onUploadImage}>
            Play Image
        </Button>
        </>
    )
}

function Button({onClick,children}){
return(
    <button onClick={onClick}>
        {children}
    </button>
)
}