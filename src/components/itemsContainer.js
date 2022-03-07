import React from 'react';
import ItemCard from './itemCard'

class ItemsContainer extends React.Component {
    state = { items: [], user: '' }

    componentDidMount(){
        fetch("ap1/v1/items")
        .then(response => response.json())
        .then(data => this.setState({items: data}))
    }

    userInfo = (id) => {
        fetch('api/v1/users/' + id)
        .then(response => response.json())
        .then(data => this.setState({user: data}))
    }

    handleDelete = (id) => {
        const configObject = {
            method: 'DELETE'
        }

        return () => {
            fetch('ap1/v1/items' + id, configObject)
            .then(response => response.json())
            .then((data) => {
                const itemsArray = this.state.items.filter((item) => item.id !== data.id);
                this.setState({people: itemsArray})})
        }
    }

    render() {
        return(
            <div>
                <h1>Items</h1>
                {this.state.items.map((item, index) => <ItemCard key={index} index={index} item={item} handleDelete={this.handleDelete} userInfo={this.userInfo} user={this.state.user}/>)}
            </div>
        )}
}

export default ItemsContainer