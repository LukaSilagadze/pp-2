function Student(props){
    
    return(
        props.isLoggedin ? <h2>Welcome {props.name}</h2> : <h2>please sign in</h2>
    );
}

export default Student