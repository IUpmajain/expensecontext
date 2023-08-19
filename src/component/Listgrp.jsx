import React, { useContext } from 'react'
import Listitem from './Listitem';
import ExpenseContext from '../Context/ExpenseContext';
const Listgrp = () => {
  const {todos, deletetodo, edittodo} = useContext(ExpenseContext);
  
  return (
    <ul className="list-group mt-5 d-flex flex-column justify-content-center align-items-center">
       {
        todos.map((todo)=>(
          <Listitem key={todo.id} todo={todo} deletetodo={deletetodo} edittodo={edittodo} />
        ))
       }    

  </ul>
  )
}

export default Listgrp
