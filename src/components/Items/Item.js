import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service';


class Item extends Component {

    state = {
        id: 0,
        current: [],
        check: true,
        check1: false,
        check2: false,
        total : 0
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.order_id
        })

    }
    componentDidUpdate(){
        
    }

    finish = () => {
        this.props.history.push(`/reciept/${this.state.id}`)
    }


    handleClick = (event) => {
        const customerOrderId = this.state.id
        OrderService.addItem(event, customerOrderId)
            .then(() =>
                OrderService.getReciept(customerOrderId)
                    .then(rec => {
                        this.setState({
                            current: rec.rows
                        })
                    }))
    }

    getMenuItem = (type) => {
        return (this.props.items).map((item) => {
            if(item.type === type){
            return <div className='menuitem'>
                <button 
                className='itembtn' 
                value={item.id} 
                onClick={e => this.handleClick(e.target.value)}>
                    {item.name} - {item.price}$
                </button>
            </div>}
        })
    }

    expandPizza = () => {
        this.setState(prevState => ({
            check: !prevState.check
        }))
    }
    expandSalad = () => {
        this.setState(prevState => ({
            check1: !prevState.check1
        }))
    }
    expandBurger = () => {
        this.setState(prevState => ({
            check2: !prevState.check2
        }))
    }


    render() {
        const current = this.state.current.map((order) => {
           return <tr>
                <td>{order.item_name}</td>
                <td>{order.item_price}$</td>
            </tr>
        })

        let classname = 'show'
        if(!this.state.check){ classname = 'hidden'}
        else classname = 'show'

        let classname1 = 'show'
        if(!this.state.check1){ classname1 = 'hidden'}
        else classname1 = 'show'

        let classname2 = 'show'
        if(!this.state.check2){ classname2 = 'hidden'}
        else classname2 = 'show'
        

        return (

            <div className='i1'>
                <section className='Current'>
                    <h3>Order Details</h3>
                    <table className='comicGreen'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {current}
                    </table>
                </section>
                <section className='item-select'>
                    <h3>Select from menu:</h3>
                    <div className='Pizza'>
                    <button className='expand' onClick={this.expandPizza}>Pizza</button>
                    <div className={classname}>
                    {this.getMenuItem('Pizza')}
                    </div>
                    </div>

                    <div className='Salads'>
                    <button className='expand' onClick={this.expandSalad}>Salads</button>
                    <div className={classname1}>
                    {this.getMenuItem('Salad')}
                    </div>
                    </div>

                    <div className='Burgers'>
                    <button className='expand' onClick={this.expandBurger}>Burgers</button>
                    </div>
                    <div className={classname2}>
                    {this.getMenuItem('burgers')} 
                    </div>
                    <div className='button-div'>
                        <button className='finish' onClick={this.finish}>Finish</button>
                </div>
                </section>
                
            </div>


        )
    }
}

export default withRouter(Item)