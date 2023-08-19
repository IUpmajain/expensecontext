import React, { useContext } from 'react'
import ExpenseContext from '../Context/ExpenseContext';

const Cardsection = () => {
  const {todos}= useContext(ExpenseContext);
  const income = todos.reduce((p,c)=>{
    return p + c.amount;
  },0);

  const expense =todos.reduce((p,c)=>{
    return p + c.amount;
  },0)
  return (
    <div className="collection mt-4 d-flex justify-content-center ">
<div className="container2 w-75 d-flex justify-content-center align-items-center">
<div className="container d-flex flex-column text-center justify-content-center">
            <h5 className='fs-5 fw-semibold text-white'>Current Income </h5><h3 className='fs-1 text-white'>₹{income}</h3>
            </div>

            <div className="container bg-danger d-flex flex-column text-center justify-content-center">
            <h5 className='fs-5 fw-semibold text-white'>Current Expense </h5><h3 className='fs-1 text-white'>₹{expense}
            </h3>
            </div>
</div>
          </div>

  )
}

export default Cardsection;
