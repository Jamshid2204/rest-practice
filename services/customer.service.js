import {client} from '../configs/database.js'


export function getAllCustomer() {
  return client.query('SELECT * FROM customers;')
}

export function findCustomer(id) {
  return client.query('SELECT * FROM customers WHERE id=$1;', [id])
}

export function findCustomerbyName(name) {
  return client.query('SELECT * FROM customers WHERE name = $1;', [name])
}

export function updateCustomerbyId(city, id) {
  return client.query("UPDATE customers SET city= $1 WHERE id = $2;", [city], [id])
}