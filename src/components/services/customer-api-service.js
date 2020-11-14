import config from '../../config'

const CustomerService = {
    getCustomers(){
        return fetch(`${config.API_ENDPOINT}/customers`)
        .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
    },
    getCustomer(id){
        return fetch(`${config.API_ENDPOINT}/customers/${id}`)
        .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
    },
    insertCustomer(customer_name,customer_adress,customer_phone){
        return fetch(`${config.API_ENDPOINT}/customers`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                customer_name,
                customer_adress,
                customer_phone,
            }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    updateCustomer(customer_name,customer_adress,customer_phone,customer_id){
        return fetch(`${config.API_ENDPOINT}/customers/${customer_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                customer_name,
                customer_adress,
                customer_phone,
            }),
        })
    },
    deleteCustomer(customer_id){
        return fetch(`${config.API_ENDPOINT}/customers/${customer_id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
    }
}

export default CustomerService