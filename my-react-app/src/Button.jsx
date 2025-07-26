function Button(){

    const styles = {
        margin: "50px auto",
        fontSize: "60px",
        border: "none",
        backgroundColor: "rgba(14, 205, 3, 0.536)",
        padding: "20px",
        borderRadius: "20px",
        cursor: "pointer"
    }

    return(
        <>
            <button style={styles}>Click Me</button>
        </>
    )
}

export default Button