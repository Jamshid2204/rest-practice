import { Router } from "express";
import { findCustomer, findCustomerbyName, getAllCustomer, updateCustomerbyId } from "../services/customer.service.js";


const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await getAllCustomer()
    res.json({
      meassage: 'all customers retrived',
      customers: result.rows
    })
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
      Error: err
    })
  }
 

})

router.get('/search', async (req, res) => {
  try {
    const result = await findCustomerbyName(req.query.name)
    res.json({
      meassage: 'customer is retrived',
      customers: result.rows[0]
    })
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
      Error: err
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await findCustomer(req.params.id)
    res.json({
      meassage: 'customer is retrived',
      customers: result.rows[0]
    })
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
      Error: err
    })
  }
})


router.patch('/:id', async (req, res) => {
  try {
    const result = await updateCustomerbyId(req.body , req.params.id)
    res.json({
      meassage: 'customer is updated',
      
    })
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
      Error: err
    })
  }
})





export default router