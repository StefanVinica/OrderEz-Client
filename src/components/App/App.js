import React, { Component } from 'react'
import { Route , BrowserRouter as Router } from 'react-router-dom'
import CustomerListPage from '../Customers/CustomersListPage'
import AddCustomer from '../Customers/AddCustomer'
import ItemListPage from '../Items/ItemListPage'
import CustomersListPage from '../Customers/CustomersListPage'
import Customer from '../Customers/Customer'
import AddItem from '../Items/AddItem'
import Reciept from '../OrderReciept/reciept'
import AllOrders from '../OrderReciept/allorders'
import CustomerList from '../lists/CustomerList'
import MenuList from '../lists/MenuList'
import EditCustomer from '../Edit/EditCustomer'
//import CustomerService from '../services/customer-api-service'

class App extends Component {



  render() {

    return (
      
        <div>

        <Route 
        exact
        path="/"
        component={AllOrders}
        />
        
        <Route 
        exact
        path="/customers"
        component={CustomerListPage}
        />

        <Route 
        path="/edit/:customer_id"
        component={EditCustomer}
        />

        <Route 
        path="/items/:order_id"
        component={ItemListPage}
        />
       
        <Route 
        path="/newitem"
        component={AddItem}
        />

        <Route 
        path="/newcustomer"
        component={AddCustomer}
        />

        <Route 
        path="/reciept/:reciept_id"
        component={Reciept}
        />

        <Route 
        path='/customerlist'
        component={CustomerList}
        />
        
        <Route 
        path='/menulist'
        component={MenuList}
        />
  
      </div>
    )
  }
}
export default App;