import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ItemService from '../services/item-api-service'

export default class AddItem extends Component {

    state = {
       types: [],
    }

    componentDidMount(){
        ItemService.getTypes()
        .then(types => {
            this.setState({
                types
            })
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const name = form.get('name')
        const price = form.get('price')
        const typeId = form.get('type')

        ItemService.insertItem(name, price, typeId)
        console.log('New Item Added')
    }
    

    render() {
        const types = this.state.types
        const options = types.map((type) =>
            <option name={type.id} key={type.id} value={type.id}>
                {type.name}
            </option>
        )

        return (
            <section>
                <nav role="navigation">
                   <Link to={'/'}>Home</Link>
                   <Link to={'/customers'}>New Order</Link>
                   <Link to={'/newitem'}>New Item</Link>
                   <Link to={'/newcustomer'}>New Customer</Link>
            </nav>
                <h1>Add Item</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div><input required name='name' id='name' type="text" placeholder="Enter new Item Name"></input></div>
                    <div><input required name='price' id='price' type="text" placeholder="Enter Price of new Item"></input></div>
                    <p>Select Type</p>
                    <select name='type' className="select-type">
                        {options}
                    </select>
                    <div><button className='Submit' type='submit'>Add New Item</button></div>
                </form>
            </section>
        )
    }
}

