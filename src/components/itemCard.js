const ItemCard = (props) => {

    return(
        <div className="item-card">
            - {props.item.name} <br/>
            <img src={props.item['image-url']} alt={`Profile ${props.item.id}`} />
            <button id="delete" onClick={props.handleOnDelete(props.item.id)}>Delete</button>
            <button id="user-display" onClick={() => {props.onInfoClick(props.item['owner_id'])}}>User Info</button> <br/>
            <>{props.user.name}: {props.user.username}</>
        </div>
    )
}

export default ItemCard