const ItemCard = (props) => {

    return(
        <div className="item-card">
            - {props.item.name} <br/>
            <img src={props.item.image} alt={`Profile ${props.item.id}`} />
            <button id="delete" onClick={props.handleDelete(props.index)}>Delete</button>
            <button id="user-display" onClick={props.userInfo(props.index)}>User Info</button> <br/>
            <>{props.user.name}: {props.user.username}</>
        </div>
    )
}

export default ItemCard