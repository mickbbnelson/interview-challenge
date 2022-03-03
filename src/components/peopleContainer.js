import React from 'react';
import PeopleCard from './peopleCard'

class PeopleContainer extends React.Component {
    state = { people: [] }

    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => this.setState({people: data.results}))
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <h1>Star Wars Folks</h1>
                {this.state.people.map((person, index) => <PeopleCard key={index} person={person}/>)}
            </div>
        )}
}

export default PeopleContainer