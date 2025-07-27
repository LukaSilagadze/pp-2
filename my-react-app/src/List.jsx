function List (props){
    const fruits = ["apple", "banana", "pinapple"];
    
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(
        <ul>{listItems}</ul>
    )
}

export default List