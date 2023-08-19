import React, { useContext, useEffect,useState } from 'react'
import ExpenseContext from '../Context/ExpenseContext';

const Mainsection = () => {
  const {todos, savetodo, edit, update} = useContext(ExpenseContext);

  const [text, setText]=useState("");
  const [amount, setAmount]=useState();

  const mainbalance= todos.reduce((p,c)=>{
    return p+c.amount;
  },0)
  const handlesubmit =(e)=>{
    e.preventDefault();
    if(edit.isedit){
      update(edit.todo.id, text, amount);
    }
    else{
    savetodo(text,amount);
    }
    setText("");
    setAmount("");
  }

  useEffect(() => {
    setText(edit.todo.text);
    setAmount(edit.todo.amount);
  }, [edit]);
  return (
    <div className="mainsection d-flex justify-content-center mt-3">
        <div className="container1  d-flex"><div className="card border d-flex justify-content-center align-items-center"><h5 className='fs-5 fw-semibold'>Current Balance </h5><h3 className='fs-1'>₹{mainbalance}
        </h3></div><span>d
          </span></div>
          <form className="container1  d-flex justify-content-center align-items-center" onSubmit={handlesubmit}>
            <div className="card flex-column border p-3 d-flex  justify-content-end ">
            <input value={text} type="text" name="" id="" placeholder='Enter your Transaction Name' className='border-0 bg-transparent border-bottom p-1 border-dark-subtle'  onChange={(e)=>setText(e.target.value)} />
            <input value={amount} type="number" name="" id="" placeholder='Enter Amount' className='border-0 bg-transparent border-bottom p-1 border-dark-subtle mt-3' onChange={(e)=>setAmount(e.target.value)}/>
            <button className="btn btn-success rounded-0 p-1 fs-6 fw-semibold mt-3">Save Transaction</button>
          </div>
          </form>
          
</div>
  )
}

export default Mainsection
