import React from 'react';
import ItemCard from './itemCard'

class ItemsContainer extends React.Component {
    state = { items: [], user: '' }

    componentDidMount(){
        fetch("ap1/v1/items")
            .then(response => response.json())
            .then(data => this.setState({items: data}))
    }

    fetchUserInfo = (id) => {
        fetch('api/v1/users/' + id)
            .then(response => response.json())
            .then(data => this.setState({user: data}))
    }

    handleDelete = (id) => {
        const configObject = {
            method: 'DELETE'
        }

        fetch('ap1/v1/items' + id, configObject)
            .then(response => response.json())
            .then(() => {
                const itemsArray = this.state.items.filter((item) => item.id !== id);
                this.setState({people: itemsArray})
            })
        
    }

    render() {
        return(
            <div>
                <h1>Items</h1>
                {this.state.items.map((item, index) => (
                    <ItemCard 
                    key={item.id} 
                    item={item} 
                    handleOnDelete={this.handleDelete} 
                    onInfoClick={this.fetchUserInfo} 
                    user={this.state.users}
                    />)
                )}
            </div>
        )
    }
}

export default ItemsContainer


// Rename function of user info.
// Correctly indent fetch requests and chained functions
// Correct handleDelete so its not returning another function
// Adjust the id from the delete fetch request

