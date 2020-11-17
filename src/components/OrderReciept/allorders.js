import React, { Component } from 'react'
import { format } from "date-fns";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OrderService from '../services/order-api-service'
import Nav from '../../nav/nav'
import './order.css'

class AllOrders extends Component {

    state = {
        active: []
    }

    componentDidMount() {
        OrderService.getAll()
            .then(res => {
                this.setState({
                    active: res.rows
                })
            })
    }

    renderList = () => {
        return this.state.active
        .sort((order1,order2)=>{
            return (order1.customer_id_fk-order2.customer_id_fk)
        })
        .map((order) => {
            return <tr>
                <td>{order.customer_id_fk}</td>
                <td>{order.order_date}</td>
                <td><Link to={`/reciept/${order.customer_id_fk}`}>
                    {order.customer_name}
                </Link></td>
                <td>{order.customer_adress}</td>
                <td>{order.sum}$</td>
            </tr>
        })
        
    }


    render() {
        return <div>
            <Nav />
            <div className='box'>
            <div className='boxheader'> 
            <div className='boxtitle'>   
            <h1>All Active Orders:</h1>
            </div>
            </div>
            <div className='boxbody'>
            <table className="table">
                <tbody>
                <tr>
                    <th>Order #</th>
                    <th>Date Ordered</th>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Total</th>
                </tr>
                {this.renderList()}
                </tbody>
            </table>
            </div>
            </div>    
        </div>
    }
}

export default withRouter(AllOrders)