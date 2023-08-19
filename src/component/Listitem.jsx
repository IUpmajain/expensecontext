import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
const Listitem = ({todo, deletetodo, edittodo}) => {
  return (
    <>
          <li className="list-group-item w-75 fs-3 d-flex align-items-center justify-content-between">
            <h5 className={todo.amount>0 ? "income-in" : "expense-out"}>₹{todo.amount}</h5>
      <h4>{todo.text}</h4>
      <button className='bg-transparent border-0'>
      <FaPen className='fs-4  text-dark-subtle me-2'onClick={()=>edittodo(todo)}/>
        <FaTrashAlt className='fs-3  text-danger' onClick={()=>deletetodo(todo.id)} /></button>
      </li>
    </>
  )
}

export default Listitem;
