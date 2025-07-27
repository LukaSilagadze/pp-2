function List (props){
    
    const itemList = props.items;


    const listItems = itemList.map(item => 
        <li key={item.id}>
            {item.name} - {item.calories}cal
        </li>
    );

    return(
        <div className="listBox">
        <h1 className="listTitle">{props.category.toUpperCase()} LIST</h1>
        <ul className="listUl">{listItems}</ul>
        </div>
    )
}

export default List