const PeopleCard = (props) => {
    return(
        <div className="person-card">
            - {props.person.name} <br/>
            <img src={props.person.image}/>
        </div>
    )
}

export default PeopleCard