function Button(){
    let count = 0;

    const handleClick = (e) => {
        const btn = e.target;

        if(btn.textContent === "Click Me"){
            btn.textContent = "Clicked!";
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
            btn.textContent = "Clicked!";
        }
        else{
            btn.style.textContent = "Click Me";
            btn.style.backgroundColor = "";
            btn.style.color = "";  
        }
    };

    return(
        <>
            <button className="button" onClick={handleClick}>Click Me</button>
        </>
    )
}

export default Button