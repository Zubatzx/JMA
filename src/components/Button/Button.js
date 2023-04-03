function Button(props){
    function handleClick(type, url){
        if(type === "redirect"){
            window.location.href = url
        }else if(type === "open"){
            window.open(url)
        }
    }

    return(
        <button className="btn btn-default" style={props.style} onClick={() => handleClick(props.type, props.url)}>
            {props.label}
        </button>
    )
}

export default Button;